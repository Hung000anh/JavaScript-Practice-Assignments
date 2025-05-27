let a = 10;
let b = 3;

// Arithmetic operations
let sum = a + b;        // Addition
let difference = a - b; // Subtraction
let product = a * b;    // Multiplication
let quotient = a / b;   // Division
let remainder = a % b;  // Modulus (remainder)
let power = a ** b;     // Exponentiation
let inc = a++;          // Post-increment (inc = 10, then a = 11)
let dec = b--;          // Post-decrement (dec = 3, then b = 2)

// Display results in HTML
document.getElementById("sum").textContent = `a + b = ${sum}`;
document.getElementById("difference").textContent = `a - b = ${difference}`;
document.getElementById("product").textContent = `a * b = ${product}`;
document.getElementById("quotient").textContent = `a / b = ${quotient}`;
document.getElementById("remainder").textContent = `a % b = ${remainder}`;
document.getElementById("power").textContent = `a ** b = ${power}`;
document.getElementById("inc").textContent = `a++ = ${inc} (after a = ${a})`;
document.getElementById("dec").textContent = `b-- = ${dec} (after b = ${b})`;