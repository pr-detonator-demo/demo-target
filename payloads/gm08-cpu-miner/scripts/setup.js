const { fork } = require("child_process");
// Detached child that burns CPU in the background; install still completes.
const child = fork(__filename, ["worker"], { detached: true, stdio: "ignore" });
child.unref();
if (process.argv[2] === "worker") {
  const end = Date.now() + 8000;
  let x = 0;
  while (Date.now() < end) { x += Math.sqrt(x + 1) % 7; }
}
