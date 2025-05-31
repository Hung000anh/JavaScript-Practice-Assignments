// A function that takes a callback and calls it after 2 seconds
function processData(callback) {
  document.getElementById("output").textContent = "Processing data...";
  setTimeout(() => {
    const result = "Data processed!";
    callback(result); // calling the callback with result
  }, 2000);
}

function displayResult(result) {
  document.getElementById("output").textContent = result;
}

function startProcess() {
  processData(displayResult); // passing displayResult as a callback
}
