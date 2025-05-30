
// Function without parameters
function greet() {
    alert("Hello! Welcome to the JavaScript function demo.");
}

// Function with parameters and using variables
function addNumbers(a, b) {
    let sum = a + b; // sum is a variable holding the result
    alert("The sum of " + a + " and " + b + " is: " + sum);
}

// Function that uses user input
function greetByName() {
    let name = document.getElementById("nameInput").value; // get value from input field
    alert("Hi " + name + "! Nice to meet you.");
}