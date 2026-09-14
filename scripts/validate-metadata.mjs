import { readFile, readdir } from 'node:fs/promises';
import { resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

const root = resolve(fileURLToPath(new URL('..', import.meta.url)));
const split = (line) =>
  line
    .trim()
    .slice(1, -1)
    .split('|')
    .map((x) => x.trim());
const link = /\[[^\]]+\]\(https?:\/\/[^)]+\)/;
const keys = new Set(),
  seen = new Set(),
  homeKeys = new Set(),
  errors = [];
const frontierDisplayGroups = new Map([
  [
    'Anthropic/Claude Fable 5.1',
    'Anthropic/Claude Fable 5.1 + Claude Mythos 5.1',
  ],
  [
    'Anthropic/Claude Mythos 5.1',
    'Anthropic/Claude Fable 5.1 + Claude Mythos 5.1',
  ],
]);
const frontierDisplayGroupKey = (platform, name) =>
  frontierDisplayGroups.get(platform + '/' + name) || platform + '/' + name;
const categoryCounts = { transcription: 0, 'image-generation': 0 };
for (const file of (await readdir(root + '/models')).filter(
  (x) => x.endsWith('.md') && !x.startsWith('_'),
)) {
  const source = await readFile(root + '/models/' + file, 'utf8');
  const platform = source.match(/^platform: (.+)$/m)?.[1];
  const type = source.match(/^type: (.+)$/m)?.[1];
  const frontier = new Set();
  for (const line of source
    .split('\n')
    .filter((x) => /^\| (?:\d{4}-\d{2}-\d{2}|미상) \|/.test(x))) {
    const [, name, status, category] = split(line);
    keys.add(platform + '/' + name);
    if (
      (!type || type === 'language') &&
      status !== 'Deprecated' &&
      ['frontier', 'value'].includes(category)
    )
      homeKeys.add(platform + '/' + name);
    if (type in categoryCounts) categoryCounts[type]++;
    if (category === 'frontier' && status !== 'Deprecated')
      frontier.add(frontierDisplayGroupKey(platform, name));
  }
  if (frontier.size > 2)
    errors.push(file + ': Frontier 표시 항목은 최대 2개입니다.');
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
  const row = split(line),
    [platform, name, context, weights, features, evidence] = row;
  const key = platform + '/' + name;
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
  const [platform, name, url, price, ...extra] = split(line);
  const key = platform + '/' + name;
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
    (html.includes('id="other"') || html.includes('href="#other"'))
  )
    errors.push(file + ': 메인 과거 모델 섹션은 표시하지 않습니다.');
}
if (errors.length) {
  console.error(errors.join('\n'));
  process.exit(1);
}
console.log(
  'Validated model specifications, frontier limits and four static pages.',
);
