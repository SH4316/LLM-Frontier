import { readdir, readFile, writeFile } from 'node:fs/promises';
import { join, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

const root = resolve(fileURLToPath(new URL('..', import.meta.url)));
const repo = 'https://github.com/SH4316/LLM-Frontier';
const branch = process.env.PREVIEW_BRANCH || 'main';
const github = (path) => repo + '/blob/' + branch + '/' + path;
const preview = (path) => 'https://htmlpreview.github.io/?' + github(path);
const esc = (value = '') =>
  String(value)
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;')
    .replaceAll("'", '&#39;');
const cells = (line) =>
  line
    .trim()
    .replace(/^\|/, '')
    .replace(/\|$/, '')
    .split('|')
    .map((x) => x.trim());
const link = (value = '') => {
  let html = '',
    offset = 0;
  for (const m of value.matchAll(/\[([^\]]+)\]\((https?:\/\/[^)]+)\)/g)) {
    html +=
      esc(value.slice(offset, m.index)) +
      '<a href="' +
      esc(m[2]) +
      '" target="_blank" rel="noreferrer">' +
      esc(m[1]) +
      ' ↗</a>';
    offset = m.index + m[0].length;
  }
  return html + esc(value.slice(offset));
};
function parse(source) {
  const meta = {};
  for (const line of (source.match(/^---\n([\s\S]*?)\n---/)?.[1] || '').split(
    '\n',
  )) {
    const i = line.indexOf(':');
    if (i >= 0) meta[line.slice(0, i).trim()] = line.slice(i + 1).trim();
  }
  const lines = source.split(/\r?\n/);
  const start = lines.findIndex((x) => x.startsWith('| 출시일 |'));
  const rows = [];
  if (start >= 0)
    for (const line of lines.slice(start + 2)) {
      if (!line.startsWith('|')) break;
      const [
        date,
        name,
        status,
        category,
        features,
        cost,
        intro,
        pricing,
        note,
      ] = cells(line);
      rows.push({
        date,
        name,
        status,
        category,
        features,
        cost,
        intro,
        pricing,
        note,
      });
    }
  return { ...meta, rows };
}
const files = (await readdir(join(root, 'models')))
  .filter((x) => x.endsWith('.md') && !x.startsWith('_'))
  .sort();
const platforms = await Promise.all(
  files.map(async (file) => ({
    ...parse(await readFile(join(root, 'models', file), 'utf8')),
    file,
  })),
);
const specs = new Map();
try {
  const text = await readFile(join(root, 'specs', 'models.md'), 'utf8');
  for (const line of text
    .split('\n')
    .filter(
      (x) =>
        x.startsWith('|') &&
        !x.startsWith('|---') &&
        !x.startsWith('| 플랫폼 |'),
    )) {
    const [platform, name, context, weights, features, source] = cells(line);
    specs.set(platform + '/' + name, { context, weights, features, source });
  }
} catch (error) {
  if (error.code !== 'ENOENT') throw error;
}
const languages = platforms.filter((p) => !p.type || p.type === 'language');
const all = languages.flatMap((p) => p.rows.map((m) => ({ p, m })));
const sort = (a, b) =>
  (b.m.date === '미상' ? '' : b.m.date).localeCompare(
    a.m.date === '미상' ? '' : a.m.date,
  );
const frontier = all.filter(
  (x) => x.m.category === 'frontier' && x.m.status !== 'Deprecated',
);
for (const p of languages) {
  if (frontier.filter((x) => x.p.slug === p.slug).length > 2)
    throw new Error(p.platform + ': frontier 모델은 최대 2개입니다.');
}
const value = all
  .filter((x) => x.m.category === 'value' && x.m.status !== 'Deprecated')
  .sort(sort);
const other = all
  .filter((x) => x.m.category !== 'frontier' || x.m.status === 'Deprecated')
  .filter((x) => x.m.category !== 'value' || x.m.status === 'Deprecated')
  .sort(sort);
const styles = await readFile(join(root, 'styles.css'), 'utf8');
const initials = {
  openai: 'O',
  anthropic: 'A',
  google: 'G',
  deepseek: 'D',
  glm: 'Z',
  kimi: 'K',
  qwen: 'Q',
  meta: 'M',
  xai: '𝕏',
  cursor: 'C',
  upstage: 'U',
  xiaomi: 'mi',
  nvidia: 'N',
  tencent: 'T',
  poolside: 'P',
};
function icon(p) {
  const slug = p.icon_slug || p.slug;
  const domain = p.official_site ? new URL(p.official_site).hostname : '';
  return (
    '<span class="platform-icon icon-' +
    esc(slug) +
    '" aria-hidden="true">' +
    esc(initials[slug] || p.platform.slice(0, 2)) +
    (domain
      ? '<img src="https://www.google.com/s2/favicons?domain=' +
        esc(domain) +
        '&amp;sz=64" alt="" loading="lazy" onerror="this.style.display=\'none\'">'
      : '') +
    '</span>'
  );
}
function table(entries) {
  const contextTitle = entries.some(({ p }) => p.type && p.type !== 'language')
    ? 'Context / 입력한도'
    : 'Context length';
  return (
    '<div class="table-scroll"><table><thead><tr><th>플랫폼 / 모델</th><th>출시일</th><th>' +
    contextTitle +
    '</th><th>Open weights</th><th>특화 기능</th><th>소개 / 가격</th></tr></thead><tbody>' +
    entries
      .map(({ p, m }) => {
        const s = specs.get(p.platform + '/' + m.name) || {};
        return (
          '<tr><td><a class="platform-name" href="' +
          esc(github('models/' + p.file)) +
          '">' +
          icon(p) +
          esc(p.platform) +
          '</a><strong class="model-name">' +
          esc(m.name.replaceAll('`', '')) +
          '</strong><small>' +
          esc(m.status) +
          ((!p.type || p.type === 'language') &&
          m.category === 'value' &&
          m.cost
            ? ' · ' + esc(m.cost)
            : '') +
          '</small></td><td class="date">' +
          esc(m.date) +
          '</td><td>' +
          esc(s.context || '미상') +
          '</td><td>' +
          esc(s.weights || '미상') +
          '</td><td>' +
          esc(s.features || m.features) +
          (s.source ? '<small>' + link(s.source) + '</small>' : '') +
          '</td><td>' +
          link(m.intro) +
          '<small>' +
          link(m.pricing) +
          '</small>' +
          (p.type && p.type !== 'language' && m.cost
            ? '<small>' + link(m.cost.replaceAll('`', '')) + '</small>'
            : '') +
          (m.note
            ? '<small>' + link(m.note.replaceAll('`', '')) + '</small>'
            : '') +
          '</td></tr>'
        );
      })
      .join('') +
    '</tbody></table></div>'
  );
}
const nav =
  '<nav><a href="' +
  esc(preview('index.html')) +
  '">LLM</a><a href="' +
  esc(preview('transcription.html')) +
  '">Transcription</a><a href="' +
  esc(preview('image-generation.html')) +
  '">Image generation</a><a href="' +
  esc(preview('local-models.html')) +
  '">Local models</a><a href="' +
  esc(github('docs/UPDATE_RULES.md')) +
  '">Update rules</a></nav>';
const branchNavigation = `<script>
(() => {
  if (location.hostname !== 'htmlpreview.github.io') return;
  const source = decodeURI(location.search.slice(1));
  const prefix = ${JSON.stringify(repo + '/blob/')};
  if (!source.startsWith(prefix)) return;
  const path = source.slice(prefix.length);
  const requestedBranch = path.slice(0, path.lastIndexOf('/'));
  if (!requestedBranch || requestedBranch === 'main') return;
  for (const anchor of document.querySelectorAll('a[href]')) {
    anchor.href = anchor.href.replace(prefix + 'main/', prefix + requestedBranch + '/');
  }
})();
</script>`;
function document(title, body) {
  return (
    '<!doctype html><html lang="ko"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title>' +
    esc(title) +
    '</title><style>' +
    styles +
    '</style></head><body><div class="external-bar"><a href="https://artificialanalysis.ai/" target="_blank" rel="noreferrer">Artificial Analysis ↗</a></div><div class="shell"><header><a class="brand" href="' +
    esc(preview('index.html')) +
    '">Frontier Model Index</a>' +
    nav +
    '</header><main><h1>' +
    esc(title) +
    '</h1>' +
    body +
    '</main><footer>공식 자료를 기반으로 수동 업데이트 · 미상: 공식 정보 미확인 · Open weights와 오픈소스 라이선스를 구분합니다. Deprecated: 공식 폐기 예고 또는 지원 종료; 공개 가중치 이용 여부는 별도입니다.<br><a href="' +
    esc(github('AGENTS.md')) +
    '">AGENTS.md</a> · <a href="' +
    esc(repo) +
    '">GitHub</a></footer></div>' +
    branchNavigation +
    '</body></html>'
  ).replace(/></g, '>\n<');
}
const summary =
  '<p class="intro">플랫폼별 최고 모델과 고성능·저비용 모델, 전체 버전 이력. Context length는 토큰 단위이며 API·앱·설정별 한도가 다를 수 있습니다.</p><nav aria-label="모델 목록"><a href="#frontier">Frontier</a><a href="#value">가성비</a><a href="#other">다른 모델 · 과거 버전</a><a href="#platforms">플랫폼 타임라인</a></nav>';
const providers =
  '<section id="platforms"><h2>플랫폼별 타임라인</h2><div class="table-scroll"><table><thead><tr><th>플랫폼</th><th>출시 기록</th><th>문서 확인일</th><th>Markdown</th></tr></thead><tbody>' +
  languages
    .map(
      (p) =>
        '<tr><td class="platform-name">' +
        icon(p) +
        esc(p.platform) +
        '</td><td>' +
        p.rows.length +
        '</td><td>' +
        esc(p.last_reviewed) +
        '</td><td><a href="' +
        esc(github('models/' + p.file)) +
        '">' +
        esc(p.file) +
        ' ↗</a></td></tr>',
    )
    .join('') +
  '</tbody></table></div></section>';
await writeFile(
  join(root, 'index.html'),
  document(
    'Frontier LLM Index',
    summary +
      '<section id="frontier"><h2>Frontier models <span>' +
      frontier.length +
      '</span></h2><p>플랫폼별 최상위 모델 1–2개.</p>' +
      table(frontier) +
      '</section><section id="value"><h2>Value models · 고성능·저비용</h2><p>Sonnet·DeepSeek Flash·Gemini Flash처럼 실용 성능이 높고 비용이 낮은 모델입니다. 소형 모델 목록이 아니며, 메모리별 실행 추천은 Local 페이지에서 확인합니다.</p>' +
      table(value) +
      '</section><section id="other"><h2>다른 모델 · 과거 버전</h2>' +
      table(other) +
      '</section>' +
      providers,
  ),
);
for (const [type, file, title] of [
  ['transcription', 'transcription.html', 'Transcription Models'],
  ['image-generation', 'image-generation.html', 'Image Generation Models'],
]) {
  const entries = platforms
    .filter((p) => p.type === type)
    .flatMap((p) => p.rows.map((m) => ({ p, m })))
    .sort(sort);
  await writeFile(
    join(root, file),
    document(
      title,
      '<p class="intro">공식 출시 이력과 모델 문서. 음성·이미지 모델의 입력 한도는 지원 단위로 표시합니다.</p>' +
        table(entries),
    ),
  );
}
const localSource = await readFile(join(root, 'specs/local-models.md'), 'utf8');
let localBody = '',
  inTable = false,
  headerRow = false;
for (const line of localSource.split(/\r?\n/)) {
  if (line.startsWith('|---')) continue;
  if (line.startsWith('|')) {
    if (!inTable) {
      localBody += '<div class="table-scroll"><table>';
      inTable = true;
      headerRow = true;
    }
    const tag = headerRow ? 'th' : 'td';
    localBody +=
      '<tr>' +
      cells(line)
        .map((c) => '<' + tag + '>' + link(c) + '</' + tag + '>')
        .join('') +
      '</tr>';
    headerRow = false;
  } else {
    if (inTable) {
      localBody += '</table></div>';
      inTable = false;
    }
    if (line.startsWith('## '))
      localBody += '<section><h2>' + esc(line.slice(3)) + '</h2></section>';
    else if (line && !line.startsWith('# '))
      localBody += '<p>' + link(line) + '</p>';
  }
}
if (inTable) localBody += '</table></div>';
await writeFile(
  join(root, 'local-models.html'),
  document(
    'Local Models by Memory',
    '<div class="local-guide">' + localBody + '</div>',
  ),
);
console.log('Generated four static pages from Markdown.');
