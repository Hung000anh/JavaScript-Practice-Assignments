// Get element by ID
const myHeading = document.getElementById("myHeading");
myHeading.style.backgroundColor = "yellow";

// Get elements by class name
const fruits = document.getElementsByClassName("fruits");
console.log(fruits);

// Get elements by tag name
const h2Elements = document.getElementsByTagName("h2");
console.log(h2Elements);

const liElements = document.getElementsByTagName("li");
for (let li of liElements) {
  li.style.backgroundColor = "green";
}

// Query selector (first <h1>)
const firstHeading = document.querySelector("h1");
console.log(firstHeading);
firstHeading.style.backgroundColor = "red";

// Query selector all
const fruitItems = document.querySelectorAll(".fruits");
console.log(fruitItems);
fruitItems[1].style.backgroundColor = "blue";
