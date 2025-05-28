document.getElementById("submitBtn").onclick = function() {
    const age = Number(document.getElementById("ageInput").value);
    let message = "";

    if (age === 0) {
        message = "Age cannot be zero.";
    } else if (age >= 100) {
        message = "You have reached a century or more!";
    } else if (age >= 18) {
        message = "You are an adult.";
    } else {
        message = "You are a minor.";
    }

    document.getElementById("result").textContent = message;
};