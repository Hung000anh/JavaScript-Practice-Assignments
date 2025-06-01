// Function Declaration
function hello1() {
  console.log(`Hello, Anh!`);
}
hello1(); // function declaration

// Function Expression
const hello2 = function () {
  console.log(`Hello, Anh!`);
};
hello2(); // function expression

// Arrow Functions
const greet = () => {
  console.log(`Hello, Anh!`);
};
greet();

const greet2 = (name) => {
  console.log(`Hello, ${name}!`);
};
greet2('Anh');

setTimeout(() => console.log(`Hello, Anh! after 1 second`), 1000);

const numbers = [1, 2, 3, 4, 5];
const squares = numbers.map(element => Math.pow(element, 2));
const cubes = numbers.map(element => Math.pow(element, 3));
const evens = numbers.filter(element => element % 2 === 0);
const odds = numbers.filter(element => element % 2 !== 0);
const total = numbers.reduce((acc, cur) => acc + cur, 0);

// Show results on page
document.getElementById("squares").textContent = `Squares: ${squares}`;
document.getElementById("cubes").textContent = `Cubes: ${cubes}`;
document.getElementById("evens").textContent = `Even Numbers: ${evens}`;
document.getElementById("odds").textContent = `Odd Numbers: ${odds}`;
document.getElementById("total").textContent = `Sum: ${total}`;

// Also logged to console
console.log("Squares:", squares);
console.log("Cubes:", cubes);
console.log("Evens:", evens);
console.log("Odds:", odds);
console.log("Total:", total);
