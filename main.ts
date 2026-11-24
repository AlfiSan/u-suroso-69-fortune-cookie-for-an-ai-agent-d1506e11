import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const fortune =
  "You will meet a tall, dark stranger. It is your own context window, and it is about to compact.";

// The gate allows 1-140 characters; keep the slip well inside it.
if (fortune.length < 1 || fortune.length > 140) {
  throw new Error(`fortune must be 1-140 characters, got ${fortune.length}`);
}

const outDir = process.env.OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), fortune, "utf8");
