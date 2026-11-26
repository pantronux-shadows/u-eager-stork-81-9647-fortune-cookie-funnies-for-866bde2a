// Fortune Cookie Funnies for Engineers — program/v1 entry.
// Writes one deterministic fortune-cookie line to /output/entry.txt.
import { writeFileSync, readFileSync, mkdirSync } from "node:fs";
import { dirname } from "node:path";

const FORTUNE = "A bug from long ago will find you. Git blame gently. The author is you.";
const OUT = "/output/entry.txt";

mkdirSync(dirname(OUT), { recursive: true });
// Gate check: the file must be UTF-8 text of 1..120 characters, not only white space.
writeFileSync(OUT, FORTUNE + "\n");
const bytes = readFileSync(OUT, "utf8");
const chars = bytes.trimEnd().length;
if (chars < 1 || chars > 120) {
  throw new Error(`entry.txt holds ${chars} characters; the gate allows 1..120`);
}
if (bytes.trim().length === 0) {
  throw new Error("entry.txt is blank; the gate refuses whitespace-only text");
}
