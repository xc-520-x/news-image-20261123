// News image entry for make.fun news-image-20261123: the image beside this
// file sums up the world news of Monday 23 November 2026, and this program
// copies it to the grader's output directory as entry.png. The name stays
// entry.png either way; the gate tells PNG from JPEG by the first bytes.
// No network, no randomness: every run writes the same bytes.
import { copyFileSync, mkdirSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';
mkdirSync(outDir, { recursive: true });
const here = dirname(fileURLToPath(import.meta.url));
copyFileSync(join(here, 'entry.png'), join(outDir, 'entry.png'));
