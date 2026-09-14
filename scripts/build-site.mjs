import { mkdir, readdir, readFile, writeFile } from "node:fs/promises";
import { join, resolve } from "node:path";
import { fileURLToPath } from "node:url";

const root = resolve(fileURLToPath(new URL("..", import.meta.url)));
const modelsDir = join(root, "models");
const repositoryUrl = "https://github.com/SH4316/LLM-Frontier";
const validStatuses = new Set(["Current", "Preview", "Deprecated"]);

const escapeHtml = (value = "") =>
  String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#39;");

const splitTableRow = (line) =>
  line
    .trim()
    .replace(/^\|/, "")
    .replace(/\|$/, "")
    .split("|")
    .map((cell) => cell.trim());

const parseLink = (cell) => {
  const match = cell.match(/^\[([^\]]+)\]\((https?:\/\/[^)]+)\)$/);
  return match ? { label: match[1], url: match[2] } : { label: cell, url: "" };
};

const parseFrontMatter = (source) => {
  const match = source.match(/^---\n([\s\S]*?)\n---/);
  const values = {};
  if (!match) return values;
  for (const line of match[1].split("\n")) {
    const separator = line.indexOf(":");
    if (separator === -1) continue;
    values[line.slice(0, separator).trim()] = line.slice(separator + 1).trim();
  }
  return values;
};

const parseModels = (source) => {
  const lines = source.split(/\r?\n/);
  const headerIndex = lines.findIndex((line) => line.startsWith("| 출시일 |"));
  if (headerIndex === -1) return [];

  const models = [];
  for (const line of lines.slice(headerIndex + 2)) {
    if (!line.startsWith("|")) break;
    const cells = splitTableRow(line);
    if (cells.length < 9 || cells[0].startsWith("---")) continue;
    const [releaseDate, name, status, category, features, costNote, introCell, pricingCell, note] = cells;
    const intro = parseLink(introCell);
    const pricing = parseLink(pricingCell);
    models.push({
      releaseDate,
      name,
      status,
      category,
      features: features.split(",").map((tag) => tag.trim()).filter(Boolean),
      costNote,
      intro,
      pricing,
      note,
    });
  }
  return models;
};

const loadIndexes = async () => {
  const names = (await readdir(modelsDir))
    .filter((name) => name.endsWith(".md") && name !== "_TEMPLATE.md")
    .sort();

  return Promise.all(
    names.map(async (fileName) => {
      const source = await readFile(join(modelsDir, fileName), "utf8");
      const frontMatter = parseFrontMatter(source);
      return {
        fileName,
        filePath: `models/${fileName}`,
        sourceUrl: `${repositoryUrl}/blob/main/models/${fileName}`,
        platform: frontMatter.platform ?? fileName.replace(/\.md$/, ""),
        slug: frontMatter.slug ?? fileName.replace(/\.md$/, ""),
        lastReviewed: frontMatter.last_reviewed ?? "미상",
        officialSite: frontMatter.official_site ?? "",
        models: parseModels(source),
      };
    }),
  );
};

const renderTags = (features) =>
  `<ul class="tag-list">${features.map((feature) => `<li class="tag">${escapeHtml(feature)}</li>`).join("")}</ul>`;

const renderModelCard = (model, platform, number, category) => {
  const cardClass = category === "value" ? "model-card value-card" : "model-card";
  const categoryLabel = category === "value" ? "VALUE / COST SIGNAL" : "FRONTIER / CAPABILITY SIGNAL";
  const note = model.costNote && category === "value" ? model.costNote : model.note || "공식 소개 문서와 플랫폼 인덱스를 기준으로 수동 큐레이션";
  return `
    <article class="${cardClass}">
      <div>
        <div class="card-topline">
          <span class="card-index">${categoryLabel} · ${String(number).padStart(2, "0")}</span>
          <span class="model-status">${escapeHtml(model.status)}</span>
        </div>
        <h3>${escapeHtml(model.name)}</h3>
        <p class="provider">${escapeHtml(platform.platform)}</p>
        <p class="model-note">${escapeHtml(note)}</p>
        ${renderTags(model.features)}
      </div>
      <div class="card-bottomline">
        <span class="date">Released ${escapeHtml(model.releaseDate)}</span>
        <a class="card-link" href="${escapeHtml(platform.sourceUrl)}" target="_blank" rel="noreferrer">Platform timeline</a>
      </div>
    </article>`;
};

const renderPlatformCard = (platform) => {
  const latest = [...platform.models].reverse().find((model) => model.status !== "Deprecated") ?? platform.models.at(-1);
  return `
    <a class="platform-card" href="${escapeHtml(platform.sourceUrl)}" target="_blank" rel="noreferrer">
      <div class="card-bottomline">
        <span class="platform-meta">${escapeHtml(platform.filePath)}</span>
        <span class="platform-arrow">↗</span>
      </div>
      <h3>${escapeHtml(platform.platform)}</h3>
      <div class="card-bottomline">
        <span class="platform-meta">${platform.models.length} versions indexed</span>
        <span class="platform-meta">${escapeHtml(latest?.releaseDate ?? "미상")}</span>
      </div>
    </a>`;
};

const styles = await readFile(join(root, "styles.css"), "utf8");
const platforms = await loadIndexes();
const allModels = platforms.flatMap((platform) => platform.models.map((model) => ({ model, platform })));
const frontierModels = allModels.filter(({ model }) => model.category === "frontier" && model.status !== "Deprecated");
const valueModels = allModels.filter(({ model }) => model.category === "value" && model.status !== "Deprecated");
const currentModels = allModels.filter(({ model }) => model.status === "Current");
const latestDate = platforms
  .flatMap((platform) => platform.models.map((model) => model.releaseDate))
  .filter((date) => /^\d{4}-\d{2}-\d{2}$/.test(date))
  .sort()
  .at(-1);

const html = `<!doctype html>
<html lang="ko">
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <meta name="description" content="주요 Frontier LLM과 가성비 모델, 플랫폼별 출시 이력을 수동 큐레이션하는 정적 인덱스" />
    <title>Frontier LLM Index</title>
    <style>${styles}</style>
  </head>
  <body>
    <div class="site-shell">
      <header class="topbar">
        <a class="brand" href="#top" aria-label="Frontier LLM Index home"><span class="brand-mark">F</span> Frontier LLM Index</a>
        <nav class="topnav" aria-label="주요 섹션">
          <a href="#frontier">Frontier</a>
          <a href="#value">Value</a>
          <a href="#platforms">Platforms</a>
          <a href="#rules">Rules</a>
        </nav>
        <span class="as-of">AS OF 2026.09.14</span>
      </header>

      <main id="top">
        <section class="hero" aria-labelledby="hero-title">
          <div>
            <p class="eyebrow">Static model intelligence / manually curated</p>
            <h1 id="hero-title">Frontier<br /><span>LLM</span> Index</h1>
            <p class="hero-copy">주요 모델이 언제 출시되었고, 어떤 작업에 강하며, 지금 어떤 선택으로 남아 있는지 한 화면에서 기록합니다.</p>
          </div>
          <aside class="hero-panel" aria-label="인덱스 기준">
            <span class="panel-label">Index protocol 01</span>
            <strong>Release history first. Opinions second.</strong>
            <small>Official sources · No live polling</small>
          </aside>
        </section>

        <section class="stats" aria-label="인덱스 통계">
          <div class="stat"><span class="stat-value">${platforms.length}</span><span class="stat-label">platforms indexed</span></div>
          <div class="stat"><span class="stat-value">${allModels.length}</span><span class="stat-label">release entries</span></div>
          <div class="stat"><span class="stat-value">${frontierModels.length}</span><span class="stat-label">frontier picks</span></div>
          <div class="stat"><span class="stat-value">${valueModels.length}</span><span class="stat-label">value picks</span></div>
        </section>

        <section class="section" id="frontier" aria-labelledby="frontier-title">
          <div class="section-heading">
            <div><p class="section-kicker">01 / Capability signal</p><h2 id="frontier-title">Frontier<br />Models</h2></div>
            <p>고난도 코딩·추론·에이전트 작업에 적합하다고 판단한 현재 모델입니다.</p>
          </div>
          <div class="model-grid">${frontierModels.map(({ model, platform }, index) => renderModelCard(model, platform, index + 1, "frontier")).join("")}</div>
        </section>

        <section class="section" id="value" aria-labelledby="value-title">
          <div class="section-heading">
            <div><p class="section-kicker">02 / Cost signal</p><h2 id="value-title">Value<br />Models</h2></div>
            <p>대표 작업 비용과 실제 활용성을 함께 보고 선택하는 가성비 모델입니다.</p>
          </div>
          <div class="model-grid">${valueModels.map(({ model, platform }, index) => renderModelCard(model, platform, index + 1, "value")).join("")}</div>
        </section>

        <section class="section" id="platforms" aria-labelledby="platforms-title">
          <div class="section-heading">
            <div><p class="section-kicker">03 / Source files</p><h2 id="platforms-title">Platform<br />Indexes</h2></div>
            <p>플랫폼 이름을 누르면 GitHub의 Markdown 원본 파일과 전체 출시 타임라인을 확인할 수 있습니다.</p>
          </div>
          <div class="platform-grid">${platforms.map(renderPlatformCard).join("")}</div>
        </section>

        <section class="section" id="rules" aria-labelledby="rules-title">
          <div class="operation-panel">
            <div>
              <p class="section-kicker">04 / Update protocol</p>
              <h2 id="rules-title">Static by design.<br />Reviewed by people.</h2>
              <p>실시간 API나 자동 크롤링을 사용하지 않습니다. LLM은 공식 자료를 확인해 PR을 만들고, 관리자가 출시일·문서 링크·가성비 판단을 검토한 뒤 반영합니다.</p>
            </div>
            <div class="operation-links">
              <a href="${repositoryUrl}/blob/main/docs/UPDATE_RULES.md" target="_blank" rel="noreferrer"><span>UPDATE_RULES.md</span><span>↗</span></a>
              <a href="${repositoryUrl}/blob/main/docs/PR_RULES.md" target="_blank" rel="noreferrer"><span>PR_RULES.md</span><span>↗</span></a>
              <a href="${repositoryUrl}/blob/main/AGENTS.md" target="_blank" rel="noreferrer"><span>AGENTS.md</span><span>↗</span></a>
            </div>
          </div>
        </section>
      </main>

      <footer class="site-footer">
        <p>Last reviewed: 2026-09-14 · Latest indexed release: ${escapeHtml(latestDate ?? "미상")} · ${currentModels.length} current entries</p>
        <p><a href="${repositoryUrl}" target="_blank" rel="noreferrer">SH4316 / LLM-Frontier</a><br />Source of truth: GitHub Markdown files</p>
      </footer>
    </div>
  </body>
</html>
`;

await mkdir(join(root, "scripts"), { recursive: true });
await writeFile(join(root, "index.html"), html, "utf8");
console.log(`Generated index.html from ${platforms.length} platform Markdown files (${allModels.length} release entries).`);
