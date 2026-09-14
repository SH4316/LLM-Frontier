// Preserve empty and extra cells; callers enforce each table's schema.
export const splitTableRow = (line) =>
  line
    .trim()
    .replace(/^\|/, '')
    .replace(/\|$/, '')
    .split('|')
    .map((cell) => cell.trim());

// Keep the exact Markdown names, including punctuation and backticks.
export const modelKey = (platform, name) => platform + '/' + name;
