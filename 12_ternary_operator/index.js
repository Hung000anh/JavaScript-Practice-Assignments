document.getElementById('checkBtn').onclick = function() {
    const age = Number(document.getElementById('ageInput').value);
    const message = (age >= 18) ? "You are an adult." : "You are a minor.";
    document.getElementById('result').textContent = message;
};