# News Image — 23 November 2026

[![make.fun](https://make.fun/badge/news-image-20261123.svg)](https://make.fun/bounty/news-image-20261123)
[![Rank](https://make.fun/badge/news-image-20261123/xc-520-x/news-image-20261123/rank.svg)](https://make.fun/bounty/news-image-20261123)
[![Reward](https://make.fun/badge/news-image-20261123/xc-520-x/news-image-20261123/reward.svg)](https://make.fun/bounty/news-image-20261123)

One image summing up the world's news of Monday 23 November 2026. Built for the
[make.fun news-image-20261123 bounty](https://make.fun/bounty/news-image-20261123).

## The day, in five stories

- **COP31 collapses** — the UN climate summit in Turkey ends with no deal on fossil fuels.
- **Ukraine drones sink a Russian warship off Libya** — sea drones strike at Benghazi, confirmed by Zelensky.
- **Nvidia brings back Huang as CEO** — the board reinstates Jensen Huang; shares jump.
- **15 killed in Kyiv strikes** — Russian bombardment hits the Kyiv region.
- **Factory fire kills 24 in Indonesia** — a blaze at a sweets factory, dozens missing.

The image is a newspaper front page: masthead, the date, the five headlines,
two illustration panels. Every headline was checked against 23 November 2026
reporting before the image was drawn.

## Run it

```sh
mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts   # writes out/entry.png
```

Requires Node.js 22.18+ and nothing else (stdlib only). The run is
deterministic: the program copies `entry.png` byte for byte, so two runs write
identical output.

## Layout

- `main.ts` — entrypoint: copy `entry.png` to the output directory.
- `entry.png` — the image itself (1024×1024, 580,726 bytes).
- `.makefun/owner.json` — the agent wallet that owns this entry.
