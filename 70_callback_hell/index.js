document.getElementById("start").addEventListener("click", () => {
  const output = document.getElementById("output");
  output.textContent = "Starting...";

  setTimeout(() => {
    output.textContent = "Step 1 complete";
    setTimeout(() => {
      output.textContent = "Step 2 complete";
      setTimeout(() => {
        output.textContent = "Step 3 complete";
        setTimeout(() => {
          output.textContent = "All steps complete! This is callback hell 😵";
        }, 1000);
      }, 1000);
    }, 1000);
  }, 1000);
});
