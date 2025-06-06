let timeoutId;

function startTimer() {
  timeoutId = setTimeout(() => {
    window.alert("Hello, World!");
    document.getElementById("status").textContent = "Timer completed!";
  }, 3000);
  console.log("Timer started!");
  document.getElementById("status").textContent = "Timer started. Waiting...";
}

function clearTimer() {
  clearTimeout(timeoutId);
  window.alert("Timer cleared!");
  console.log("Timer cleared!");
  document.getElementById("status").textContent = "Timer has been cleared.";
}
