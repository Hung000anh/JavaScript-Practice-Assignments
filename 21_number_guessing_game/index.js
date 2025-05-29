let randomNumber = Math.floor(Math.random() * 100) + 1;
let attempts = 0;
let guessedCorrectly = false;

document.getElementById("guessBtn").onclick = function() {
    if (guessedCorrectly) return; // Không cho đoán tiếp nếu đã đúng

    let numberGuess = Number(document.getElementById("number").value);

    // Kiểm tra nhập ngoài phạm vi
    if (numberGuess < 1 || numberGuess > 100) {
        document.getElementById("output").textContent = "Please enter a number between 1 and 100.";
        return;
    }

    attempts++;

    let check = true;
    while (check) {
        if (numberGuess === randomNumber) {
            document.getElementById("output").textContent = `Correct! You guessed it in ${attempts} attempts.`;
            guessedCorrectly = true;
            check = false;
        } else if (numberGuess > randomNumber) {
            document.getElementById("output").textContent = "Too large! TRY AGAIN";
            check = false;
        } else if (numberGuess < randomNumber) {
            document.getElementById("output").textContent = "Too small! TRY AGAIN";
            check = false;
        } else {
            document.getElementById("output").textContent = "Please enter a valid number.";
            check = false;
        }
    }
};