// One Line, One Laugh — make.fun entry (program/v1).
// The program writes exactly one funny line (1-200 UTF-8 characters,
// no trailing newline) to /output/entry.txt, which the sealed scorer
// gates and the judge reads pairwise.
//
// The line: quitting social media to escape comparison, only to end up
// comparing yourself to the people who quit — the solution becomes the
// problem, one logical step further.
import { mkdirSync, writeFileSync } from "node:fs";

const LINE =
  "I quit social media to stop comparing myself to others. Now I compare myself to people who quit social media.";

// Gate self-check: the entry must be exactly one line of 1-200 UTF-8
// characters, not only whitespace, with no trailing newline. Fail loudly
// instead of writing an invalid entry.
const chars = [...LINE].length;
if (chars < 1 || chars > 200 || LINE.includes("\n") || LINE.trim().length === 0) {
  throw new Error(`invalid entry line: ${chars} characters`);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE, "utf8");
process.stdout.write(LINE);
