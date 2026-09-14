import { readdir, readFile } from 'node:fs/promises';
import { join, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

const root = resolve(fileURLToPath(new URL('..', import.meta.url)));
const modelsDir = join(root, 'models');
const allowedStatuses = new Set(['Current', 'Preview', 'Deprecated']);
const allowedCategories = new Set(['frontier', 'value', '-']);
const allowedFeatures = new Set([
  '코딩',
  '추론',
  'Computer use',
  '속도',
  '멀티모달',
  '장문맥',
  '에이전트 작업',
  '비용 효율',
  'Tool call',
  'Vision',
  'Image input',
  'Image generation',
  'Transcription',
]);
const errors = [];
const seenSlugs = new Set();

const splitTableRow = (line) =>
  line
    .trim()
    .replace(/^\|/, '')
    .replace(/\|$/, '')
    .split('|')
    .map((cell) => cell.trim());

const hasMarkdownLink = (value) =>
  /^\[[^\]]+\]\(https?:\/\/[^)]+\)$/.test(value);

const files = (await readdir(modelsDir))
  .filter((name) => name.endsWith('.md') && name !== '_TEMPLATE.md')
  .sort();
if (files.length === 0) errors.push('models/*.md 파일이 없습니다.');

for (const file of files) {
  const source = await readFile(join(modelsDir, file), 'utf8');
  if (!source.startsWith('---\n'))
    errors.push(`${file}: YAML front matter가 없습니다.`);
  const platform = source.match(/^platform: (.+)$/m)?.[1];
  const slug = source.match(/^slug: (.+)$/m)?.[1];
  const reviewed = source.match(/^last_reviewed: (.+)$/m)?.[1];
  const type = source.match(/^type: (.+)$/m)?.[1] || 'language';
  if (!platform || !slug || !/^\d{4}-\d{2}-\d{2}$/.test(reviewed || ''))
    errors.push(`${file}: 플랫폼·slug·확인일 필드를 확인하십시오.`);
  if (!['language', 'transcription', 'image-generation'].includes(type))
    errors.push(`${file}: 알 수 없는 모델 분야입니다.`);
  if (seenSlugs.has(slug)) errors.push(`${file}: slug가 중복됩니다.`);
  seenSlugs.add(slug);
  if (
    !source.includes(
      '| 출시일 | 모델 | 상태 | 홈 분류 | 특징 | 비용 메모 | 공식 소개 | 가격 문서 | 비고 |',
    )
  ) {
    errors.push(`${file}: 표 헤더가 템플릿과 일치하지 않습니다.`);
    continue;
  }

  const lines = source.split(/\r?\n/);
  const headerIndex = lines.findIndex((line) => line.startsWith('| 출시일 |'));
  const seen = new Set();
  let previousDate = '';
  let seenUnknownDate = false;
  for (const line of lines.slice(headerIndex + 2)) {
    if (!line.startsWith('|')) break;
    const cells = splitTableRow(line);
    if (cells[0].startsWith('---')) continue;
    if (cells.length !== 9) {
      errors.push(`${file}: 모델 행은 정확히 9개 필드여야 합니다.`);
      continue;
    }
    const [date, model, status, category, features, , intro, pricing] = cells;
    const isUnknownDate = date === '미상';
    const isValidDate = /^\d{4}-\d{2}-\d{2}$/.test(date);
    if (isValidDate && reviewed && date > reviewed)
      errors.push(
        `${file}: ${model}의 출시일이 문서 확인일보다 미래입니다. 예정일은 비고에 기록하십시오.`,
      );
    if (
      isValidDate &&
      (Number.isNaN(Date.parse(date)) ||
        new Date(date).toISOString().slice(0, 10) !== date)
    )
      errors.push(`${file}: ${model}의 출시일이 실제 날짜가 아닙니다.`);
    if (!isValidDate && !isUnknownDate) {
      errors.push(`${file}: ${model}의 출시일 형식이 잘못되었습니다.`);
    } else if (isUnknownDate) {
      seenUnknownDate = true;
    } else {
      if (seenUnknownDate)
        errors.push(`${file}: 미상 출시일은 마지막에 있어야 합니다.`);
      if (previousDate && date > previousDate)
        errors.push(`${file}: 출시일이 내림차순으로 정렬되지 않았습니다.`);
      previousDate = date;
    }
    if (!allowedStatuses.has(status))
      errors.push(`${file}: ${model}의 상태 값이 잘못되었습니다.`);
    if (!allowedCategories.has(category))
      errors.push(`${file}: ${model}의 홈 분류가 잘못되었습니다.`);
    for (const feature of features
      .split(',')
      .map((tag) => tag.trim())
      .filter(Boolean)) {
      if (!allowedFeatures.has(feature))
        errors.push(
          `${file}: ${model}의 특징 태그 '${feature}'가 허용되지 않습니다.`,
        );
    }
    if (!hasMarkdownLink(intro))
      errors.push(`${file}: ${model}의 공식 소개 링크가 없습니다.`);
    if (!hasMarkdownLink(pricing))
      errors.push(`${file}: ${model}의 가격 문서 링크가 없습니다.`);
    const key = `${date}/${model}`;
    if (seen.has(key)) errors.push(`${file}: ${key}가 중복됩니다.`);
    seen.add(key);
  }
}

try {
  const html = await readFile(join(root, 'index.html'), 'utf8');
  for (const marker of [
    'id="frontier"',
    'id="value"',
    'id="platforms"',
    'UPDATE_RULES.md',
  ]) {
    if (!html.includes(marker))
      errors.push(`index.html: ${marker} 표시가 없습니다.`);
  }
} catch {
  errors.push('index.html이 없습니다. npm run build를 먼저 실행하십시오.');
}

if (errors.length) {
  console.error(errors.map((error) => `✗ ${error}`).join('\n'));
  process.exit(1);
}

console.log(`Validated ${files.length} platform indexes successfully.`);
