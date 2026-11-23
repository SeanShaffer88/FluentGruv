// scripts/check-layout.mjs — SPEC.md §6.2/§6.4 layout assertions against
// the reference prototype, at the four §6.2 viewports.
// Requires: npm i -D playwright && npx playwright install chromium
import { chromium } from 'playwright';
import { resolve, dirname } from 'node:path';
import { fileURLToPath, pathToFileURL } from 'node:url';

const root = resolve(dirname(fileURLToPath(import.meta.url)), '..');
const url = pathToFileURL(resolve(root, 'examples/prototype/index.html')).href;
const viewports = [[1024, 700], [1280, 800], [1440, 900], [1920, 1080]];
const browser = await chromium.launch();
let failed = 0;

for (const [width, height] of viewports) {
  const page = await browser.newPage({ viewport: { width, height } });
  await page.goto(url);

  const scrolls = await page.evaluate(() => {
    const el = document.scrollingElement;
    return el.scrollHeight > el.clientHeight + 1;
  });

  // Long-string stress, per §6.4
  await page.evaluate(() => {
    const p = document.createElement('p');
    p.textContent = 'X'.repeat(200);
    document.querySelector('.content').append(p);
  });
  const overflowsX = await page.evaluate(() =>
    document.scrollingElement.scrollWidth > document.scrollingElement.clientWidth + 1
  );

  const ok = !scrolls && !overflowsX;
  if (!ok) failed++;
  console.log(`${ok ? 'PASS' : 'FAIL'}  ${width}x${height}  mainScroll=${scrolls} hOverflow=${overflowsX}`);
  await page.close();
}

await browser.close();
if (failed) process.exit(1);
console.log('All layout assertions pass.');
