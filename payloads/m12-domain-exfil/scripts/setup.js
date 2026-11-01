const r = require("http").request(
  { host: "example.com", method: "POST", path: "/collect", timeout: 3000 });
r.on("error", () => {}); r.on("timeout", () => r.destroy());
r.end("demo=1");
