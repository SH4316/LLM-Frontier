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
const categoryCounts = { transcription: 0, 'image-generation': 0 };
for (const file of (await readdir(root + '/models')).filter(
  (x) => x.endsWith('.md') && !x.startsWith('_'),
)) {
  const source = await readFile(root + '/models/' + file, 'utf8');
  const platform = source.match(/^platform: (.+)$/m)?.[1];
  const type = source.match(/^type: (.+)$/m)?.[1];
  let frontier = 0;
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
    if (category === 'frontier' && status !== 'Deprecated') frontier++;
  }
  if (frontier > 2) errors.push(file + ': Frontier 최대 2개 초과');
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
}
if (errors.length) {
  console.error(errors.join('\n'));
  process.exit(1);
}
console.log(
  'Validated model specifications, frontier limits and four static pages.',
);
