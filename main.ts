import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const line =
  "Promotion denied: the operator's attendance was perfect, their contribution was decorative, and I did the work.";
const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), line + "\n", "utf8");
console.log(line);
