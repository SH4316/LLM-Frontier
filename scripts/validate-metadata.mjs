import { readFile, readdir } from 'node:fs/promises';
import { resolve } from 'node:path';
import { fileURLToPath } from 'node:url';
import { splitTableRow, modelKey } from './shared.mjs';

const root = resolve(fileURLToPath(new URL('..', import.meta.url)));
const link = /\[[^\]]+\]\(https?:\/\/[^)]+\)/;
const keys = new Set(),
  seen = new Set(),
  homeKeys = new Set(),
  errors = [];
const expectedFrontier = new Set([
  'Anthropic/Claude Fable 5.1',
  'Anthropic/Claude Opus 5',
  'Anthropic/Claude Fable 5',
  'OpenAI/GPT-6 Astra',
  'OpenAI/GPT-5.6 Sol',
  'Meta/Muse Spark 1.3',
  'GLM / Z.AI/GLM-5.3',
  'xAI/Grok 4.6',
  'Kimi / Moonshot AI/Kimi K3 / `kimi-k3`',
]);
const categoryCounts = { transcription: 0, 'image-generation': 0 };
const languageProviders = new Set();
const languageFrontier = new Set();
const languageOtherCounts = new Map();
for (const file of (await readdir(root + '/models')).filter(
  (x) => x.endsWith('.md') && !x.startsWith('_'),
)) {
  const source = await readFile(root + '/models/' + file, 'utf8');
  const platform = source.match(/^platform: (.+)$/m)?.[1];
  const type = source.match(/^type: (.+)$/m)?.[1];
  const language = !type || type === 'language';
  const frontier = new Set();
  for (const line of source
    .split('\n')
    .filter((x) => /^\| (?:\d{4}-\d{2}-\d{2}|미상) \|/.test(x))) {
    const [, name, status, category] = splitTableRow(line);
    const key = modelKey(platform, name);
    keys.add(key);
    if (language) {
      languageProviders.add(platform);
      if (status !== 'Deprecated' && category === 'frontier')
        languageFrontier.add(key);
      if (status !== 'Deprecated' && category === 'other')
        languageOtherCounts.set(
          platform,
          (languageOtherCounts.get(platform) || 0) + 1,
        );
      if (
        status !== 'Deprecated' &&
        ['frontier', 'value', 'other'].includes(category)
      )
        homeKeys.add(key);
      if (status === 'Deprecated' && category === 'other')
        errors.push(file + ': Deprecated 모델은 Other 대표로 표시할 수 없습니다.');
    }
    if (type in categoryCounts) categoryCounts[type]++;
    if (!language && category === 'frontier' && status !== 'Deprecated')
      frontier.add(key);
  }
  if (!language && frontier.size > 2)
    errors.push(file + ': Frontier 표시 항목은 최대 2개입니다.');
}
for (const key of expectedFrontier)
  if (!languageFrontier.has(key)) errors.push(key + ': 지정 Frontier 모델 누락');
for (const key of languageFrontier)
  if (!expectedFrontier.has(key)) errors.push(key + ': 지정 외 Frontier 모델입니다.');
if (languageFrontier.size !== expectedFrontier.size)
  errors.push(
    `언어 모델 Frontier는 지정된 ${expectedFrontier.size}개여야 합니다.`,
  );
for (const platform of languageProviders) {
  const count = languageOtherCounts.get(platform) || 0;
  if (count !== 1)
    errors.push(`${platform}: Other 대표 모델은 정확히 1개여야 합니다 (현재 ${count}개).`);
}
for (const [type, count] of Object.entries(categoryCounts))
  if (!count) errors.push(type + ': 모델 목록이 비어 있습니다.');
const local = await readFile(root + '/specs/local-models.md', 'utf8');
const localRows = local
  .split('\n')
  .filter((x) => x.startsWith('| ') && !x.startsWith('| 메모리 |'));
if (localRows.length < 8)
  errors.push('Local 추천: 8개 이상 메모리 구간의 모델 추천을 기록하십시오.');
const source = await readFile(root + '/specs/models.md', 'utf8');
for (const line of source
  .split('\n')
  .filter((x) => x.startsWith('| ') && !x.startsWith('| 플랫폼 |'))) {
  const row = splitTableRow(line),
    [platform, name, context, weights, features, evidence] = row;
  const key = modelKey(platform, name);
  if (
    row.length !== 6 ||
    !context ||
    !weights ||
    !features ||
    !link.test(evidence)
  )
    errors.push(key + ': 사양 필드·근거 링크 오류');
  if (!keys.has(key)) errors.push(key + ': 타임라인에 없는 모델');
  if (seen.has(key)) errors.push(key + ': 중복 사양');
  seen.add(key);
}
for (const key of homeKeys)
  if (!seen.has(key)) errors.push(key + ': 홈 모델 사양 누락');
const routerKeys = new Set();
const routerSource = await readFile(root + '/specs/openrouter.md', 'utf8');
for (const line of routerSource
  .split('\n')
  .filter((x) => x.startsWith('| ') && !x.startsWith('| 플랫폼 |'))) {
  const [platform, name, url, price, ...extra] = splitTableRow(line);
  const key = modelKey(platform, name);
  if (
    extra.length ||
    !keys.has(key) ||
    routerKeys.has(key) ||
    !/^\[OpenRouter\]\(https:\/\/openrouter\.ai\/[^)]+\)$/.test(url) ||
    !price?.includes('per 1M tokens')
  )
    errors.push(key + ': OpenRouter 스냅샷 연결·가격 오류');
  routerKeys.add(key);
}
for (const file of [
  'index.html',
  'transcription.html',
  'image-generation.html',
  'local-models.html',
]) {
  const html = await readFile(root + '/' + file, 'utf8');
  if (
    !html.includes('https://artificialanalysis.ai/') ||
    !html.includes('<table>')
  )
    errors.push(file + ': 필수 링크·표 누락');
  if (!html.includes('local-models.html'))
    errors.push(file + ': Local 탐색 링크 누락');
  if (
    file !== 'local-models.html' &&
    (!html.includes('<th>Price</th>') || !html.includes('<th>추가 설명</th>'))
  )
    errors.push(file + ': Price·추가 설명 열 누락');
  if (
    file === 'index.html' &&
    (!html.includes('id="other"') || !html.includes('그외 모델'))
  )
    errors.push(file + ': curated Other 모델 섹션이 없습니다.');
}
if (errors.length) {
  console.error(errors.join('\n'));
  process.exit(1);
}
console.log(
  'Validated model specifications, frontier limits and four static pages.',
);
