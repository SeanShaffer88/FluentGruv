// scripts/check-contrast.mjs
import { readFileSync } from 'node:fs';
import { resolve, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';
import { parseHex, contrastRatio, hexTokens } from './lib/color.mjs';

const root = resolve(dirname(fileURLToPath(import.meta.url)), '..');
const tokens = JSON.parse(readFileSync(resolve(root, 'tokens.json'), 'utf8'));
const { pairs } = JSON.parse(readFileSync(resolve(root, 'contrast-pairs.json'), 'utf8'));
const colors = hexTokens(tokens);

let failed = 0;
const rows = [];

for (const { id, fg, bg, min, use } of pairs) {
  const fgHex = colors[fg];
  const bgHex = colors[bg];

  if (!fgHex || !bgHex) {
    rows.push(`MISSING  ${id.padEnd(34)} unresolved token: ${!fgHex ? fg : bg}`);
    failed++;
    continue;
  }

  const ratio = contrastRatio(parseHex(fgHex), parseHex(bgHex));
  const ok = ratio >= min;
  if (!ok) failed++;
  rows.push(
    `${ok ? 'PASS' : 'FAIL'}     ${id.padEnd(34)} ${ratio.toFixed(2)}:1  (min ${min})  ${fgHex} on ${bgHex}  — ${use}`
  );
}

console.log(rows.join('\n'));
console.log(`\n${pairs.length - failed}/${pairs.length} pairs pass.`);

if (failed) {
  console.error(`\n${failed} contrast pair(s) below threshold.`);
  process.exit(1);
}
