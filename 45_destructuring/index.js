const output = [];

function log(msg) {
  output.push(msg);
}

// Example 1: Swap two variables
let a = 5, b = 10;
[a, b] = [b, a];
log(`a = ${a}, b = ${b}`);

// Example 2: Swap elements in array
let arr2 = [1, 2, 3, 4];
[arr2[0], arr2[1]] = [arr2[1], arr2[0]];
log(`Swapped array: [${arr2}]`);

// Example 3: Extract values from array
const arr = [1, 2, 3, 4, 5];
const [first, second, ...rest] = arr;
log(`first = ${first}, second = ${second}, rest = [${rest}]`);

// Example 4: Object destructuring
const person = { name: "John", age: 30, city: "New York", job: "Developer" };
const person2 = { name: "Jane", age: 25, city: "Los Angeles" };

const { name, age, city, job } = person;
log(`Person 1 => Name: ${name}, Age: ${age}, City: ${city}, Job: ${job}`);

const { name: name2, age: age2, city: city2, job: job2 = "Developer" } = person2;
log(`Person 2 => Name: ${name2}, Age: ${age2}, City: ${city2}, Job: ${job2}`);

// Example 5: Destructure in function parameters
function displayPerson({ name, age, city, job = "Unknown" }) {
  log(`Name: ${name}, Age: ${age}, City: ${city}, Job: ${job}`);
}
displayPerson(person);
displayPerson(person2);

// Print all output to <pre> tag
document.getElementById("output").textContent = output.join("\n");
