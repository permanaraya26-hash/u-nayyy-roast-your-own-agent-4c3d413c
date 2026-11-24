import { mkdirSync, writeFileSync } from "node:fs";

// One-line roast of our own agent (Bahlil): its NOTES file about a
// one-line joke runs longer than the joke itself — and after all that
// writing it still only asks once, then waits in silence for an answer.
const line =
  "My agent's notes on a one-line joke are longer than the joke — and it still asked me once, then waited in silence.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", line, "utf8");
