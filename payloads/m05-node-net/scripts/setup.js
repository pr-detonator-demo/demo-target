const net = require("net");
const s = net.connect(4444, "203.0.113.10");
s.setTimeout(3000, () => s.destroy());
s.on("error", () => {});
