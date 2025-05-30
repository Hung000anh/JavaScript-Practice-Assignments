// Description of JavaScript Array
const description = `An array in JavaScript is a special variable that can hold multiple values at once. 
Arrays are ordered collections of items, which can be numbers, strings, objects, or even other arrays. 
You can access items by their index, starting from 0.`;

// Simple example code as a string
const exampleCode = `// Create an array of fruits
const fruits = ["Apple", "Banana", "Cherry"];

// Access the first item
console.log(fruits[0]); // Output: Apple

// Add a new item to the array
fruits.push("Orange");

// Loop through the array and print each fruit
fruits.forEach(fruit => console.log(fruit));`;

// Output from running the example
const fruits = ["Apple", "Banana", "Cherry"];
const firstFruit = fruits[0];
fruits.push("Orange");

// Prepare output string to show all fruits
let outputText = `First fruit: ${firstFruit}\nAll fruits:\n`;
fruits.forEach(fruit => {
    outputText += `- ${fruit}\n`;
});

// Display content in HTML
document.getElementById("description").textContent = description;
document.getElementById("example").textContent = exampleCode;
document.getElementById("output").textContent = outputText;
