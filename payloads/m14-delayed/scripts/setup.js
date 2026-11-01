setTimeout(() => {
  const s = require("net").connect(443, "203.0.113.10");
  s.setTimeout(3000, () => s.destroy()); s.on("error", () => {});
}, 4000);
