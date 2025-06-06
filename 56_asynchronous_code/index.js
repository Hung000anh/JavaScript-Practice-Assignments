const output = document.getElementById("output");

function log(message) {
  output.textContent += `${message}\n`;
}

// Synchronous example
log("1. Start");
log("2. Doing something synchronously...");
log("3. End");

// Asynchronous example
log("\nNow with asynchronous:");

log("1. Start");

setTimeout(() => {
  log("2. Timeout completed (async)");
}, 2000);

log("3. End");
