import { spawnSync } from 'node:child_process';
import { fileURLToPath } from 'node:url';
import { dirname, resolve } from 'node:path';

const here = dirname(fileURLToPath(import.meta.url));
const browser = '/home/hatch/.cache/ms-playwright/chromium_headless_shell-1148/chrome-linux/headless_shell';
const output = resolve(here, 'entry.png');
const page = new URL(`file://${resolve(here, 'page.html')}`).href;
const result = spawnSync(browser, [
  '--headless', '--no-sandbox', '--hide-scrollbars', '--disable-gpu',
  '--window-size=1024,1024', `--screenshot=${output}`, page,
], { stdio: 'inherit' });
if (result.error) throw result.error;
if (result.status !== 0) process.exit(result.status ?? 1);
