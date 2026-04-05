const fs = require("node:fs");
const path = require("node:path");
const { execFileSync } = require("node:child_process");

const root = path.resolve(__dirname, "..");
const targets = ["index.js", "src", "scripts", "test"]
  .map((entry) => path.join(root, entry))
  .filter((entry) => fs.existsSync(entry));

if (!targets.length) {
  process.exit(0);
}

function collectFiles(entry) {
  const stat = fs.statSync(entry);
  if (stat.isFile()) {
    return entry.endsWith(".js") ? [entry] : [];
  }

  return fs
    .readdirSync(entry)
    .flatMap((child) => collectFiles(path.join(entry, child)));
}

const files = targets.flatMap(collectFiles);

for (const file of files) {
  execFileSync(process.execPath, ["--check", file], { stdio: "inherit" });
}
