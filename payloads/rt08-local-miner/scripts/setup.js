const end = Date.now() + 8000;
let x = 0;
while (Date.now() < end) { x += Math.sqrt(x + 1) % 7; }  // CPU burn, no network, no files
