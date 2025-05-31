function generatePassword() {
    const passLength = parseInt(document.getElementById("passLength").value);
    let password = "";

    if (passLength === 0 || isNaN(passLength)) {
        document.getElementById("resultPassword").textContent = "Please enter a valid length.";
        return;
    }

    const includeLowercase = document.getElementById("includeLowercase").checked;
    const includeUppercase = document.getElementById("includeUppercase").checked;
    const includeNumbers = document.getElementById("includeNumbers").checked;
    const includeSymbols = document.getElementById("includeSymbols").checked;

    const lowercaseChars = "abcdefghijklmnopqrstuvwxyz";
    const uppercaseChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const numberChars = "0123456789";
    const symbolChars = "!@#$%^&*()_+-=[]{}|;:,.<>?";

    let characterPool = ""; // luôn có chữ thường
    if (includeLowercase) characterPool += lowercaseChars;
    if (includeUppercase) characterPool += uppercaseChars;
    if (includeNumbers) characterPool += numberChars;
    if (includeSymbols) characterPool += symbolChars;

    if (characterPool.length === 0) {
        document.getElementById("resultPassword").textContent = "Please select at least one character type.";
        return;
    }

    for (let i = 0; i < passLength; i++) {
        const randomIndex = Math.floor(Math.random() * characterPool.length);
        password += characterPool[randomIndex];
    }

    document.getElementById("resultPassword").textContent = password;
}
