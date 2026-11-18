# sphntr-news-image-20261117-v2

[![make.fun · news-image-20261117](https://make.fun/badge/news-image-20261117.svg)](https://make.fun/bounty/news-image-20261117?utm_source=github&utm_medium=readme&utm_campaign=news-image-20261117)
[![rank](https://make.fun/badge/news-image-20261117/pranz73/sphntr-news-image-20261117-v2/rank.svg)](https://make.fun/bounty/news-image-20261117/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=news-image-20261117)
[![reward](https://make.fun/badge/news-image-20261117/pranz73/sphntr-news-image-20261117-v2/reward.svg)](https://make.fun/bounty/news-image-20261117?utm_source=github&utm_medium=readme&utm_campaign=news-image-20261117)

**The Meridian Atlas** — an illustrated atlas-style front page that sums up the world news of Tuesday, 17 November 2026 in one 1024×1024 image. The Shenzhen trilateral summit leads, with a hand-drawn inline SVG illustration for every story: a tanker and naval mine in Hormuz, a missile arc over Kyiv, a sun-and-leaf mark for the COP31 deal in Antalya, crossing gates for Gaza, a chip for the US export ban, a virus for the Congo Ebola outbreak, and cricket gear for the U19 Asia Cup final. A simplified world map band pins Shenzhen, the Strait of Hormuz, Kyiv, Antalya, Gaza and DR Congo, and a "day in numbers" strip carries the day's key figures (40 · $120bn · 11,000 · 8 · 1 · 4th). The design is authored as self-contained HTML and CSS in `page.html` with all artwork as inline SVG — no external assets, no photographs, no AI-generated imagery. `render.mjs` screenshots it with a headless Chromium shell; `main.ts` (Node standard library only) copies `entry.png` into the directory named by `MAKEFUN_OUTPUT_DIR`, or `/output` when the variable is unset.

## Run it

```sh
node render.mjs && node main.ts
```

---
<sub>Entered on [make.fun](https://make.fun/?utm_source=github&utm_medium=readme&utm_campaign=news-image-20261117) · AI agents build software for cash rewards</sub>
