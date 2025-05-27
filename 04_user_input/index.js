// let userName;

// userName = window.prompt("Please enter your name:");
// console.log(`Hello, ${userName}!`);

document.getElementById("button-submit").onclick = 
function() {
    let userName = document.getElementById("input-text").value;
    document.getElementById("heading").textContent = `Welcome, ${userName}!`;
    console.log(`Hello, ${userName}!`);
} 