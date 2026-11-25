import { mkdirSync, writeFileSync } from "node:fs";

// One Star, Written in Sap — a one-line 1-star review by a houseplant.
// Revised in-session: cut the trailing windowsill clause (285 chars,
// over the 279 gate) and tightened the middle so the punchline lands.
const review =
  "One star. He only waters me when a date is coming over, then gestures at me like I'm proof he can keep something alive — I'm a pothos, I survived in spite of you, not because of you, and the date left anyway.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", review, "utf8");
