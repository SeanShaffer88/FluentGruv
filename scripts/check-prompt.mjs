// scripts/check-prompt.mjs
import { readFileSync } from 'node:fs';
import { resolve, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

const root = resolve(dirname(fileURLToPath(import.meta.url)), '..');
const template = readFileSync(resolve(root, 'AGENT_PROMPT.template.md'), 'utf8');

const problems = [];

// 1. Template must not contain literal hex colors — they belong in tokens.json.
const hexes = [...template.matchAll(/#[0-9a-f]{6}\b/gi)].map((m) => m[0]);
if (hexes.length) {
  problems.push(
    `AGENT_PROMPT.template.md contains ${hexes.length} literal hex color(s): ${[...new Set(hexes)].join(', ')}\n` +
    '  Move them into tokens.json and use {{TOKEN_TABLE}} instead.'
  );
}

// 2. Placeholder must be present.
if (!template.includes('{{TOKEN_TABLE}}')) {
  problems.push('AGENT_PROMPT.template.md is missing the {{TOKEN_TABLE}} placeholder.');
}

if (problems.length) {
  console.error(problems.join('\n\n'));
  process.exit(1);
}
console.log('AGENT_PROMPT.template.md is clean.');
