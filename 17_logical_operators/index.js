document.getElementById('checkBtn').onclick = function() {
    const isAdult = document.getElementById('isAdult').checked;
    const hasID = document.getElementById('hasID').checked;
    const result = (isAdult && hasID)
        ? "Access granted."
        : "Access denied.";
    document.getElementById('logicResult').textContent = result;
};