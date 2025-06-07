// .firstElementChild
const firstFruit = document.getElementById("fruits").firstElementChild;
firstFruit.style.backgroundColor = "yellow";
firstFruit.classList.add("highlight");

// .lastElementChild
const lastFruit = document.getElementById("fruits").lastElementChild;
lastFruit.style.backgroundColor = "red";
lastFruit.classList.add("highlight");

// .nextElementSibling
const nextVegetable = document.getElementById("carrots").nextElementSibling;
nextVegetable.style.backgroundColor = "blue";
nextVegetable.classList.add("highlight");

// .previousElementSibling
const previousVegetable = document.getElementById("onions").previousElementSibling;
previousVegetable.style.backgroundColor = "green";
previousVegetable.classList.add("highlight");

// .parentElement
const parentCake = document.getElementById("cake").parentElement;
parentCake.style.backgroundColor = "orange";

// .children
const childrenDesserts = document.getElementById("deserts").children;
console.log(childrenDesserts);
childrenDesserts[1].style.backgroundColor = "brown";
childrenDesserts[1].classList.add("highlight");
