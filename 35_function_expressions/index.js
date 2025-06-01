// Function Declaration
function greet() {
    console.log(`Hello, Anh!`);
}

// Function Expression
const hello = function () {
    console.log(`Hello, Anh!`);
};

setTimeout(greet, 1000);
setTimeout(hello, 1500);

const numbers = [1, 2, 3, 4, 5];

// Anonymous Function Expressions
const squares = numbers.map(function (element) {
    return Math.pow(element, 2);
});

const cubes = numbers.map(function (element) {
    return Math.pow(element, 3);
});

const evens = numbers.filter(function (element) {
    return element % 2 === 0;
});

const total = numbers.reduce(function (accumulator, currentValue) {
    return accumulator + currentValue;
}, 0);

// Output to page
document.getElementById("squares").textContent = `Squares: ${squares}`;
document.getElementById("cubes").textContent = `Cubes: ${cubes}`;
document.getElementById("evens").textContent = `Even Numbers: ${evens}`;
document.getElementById("total").textContent = `Sum: ${total}`;

// Named function declarations (not used but good to show difference)
function square(num) {
    return Math.pow(num, 2);
}

function cube(num) {
    return Math.pow(num, 3);
}

function even(num) {
    return num % 2 === 0;
}

function sum(accumulator, currentValue) {
    return accumulator + currentValue;
}
