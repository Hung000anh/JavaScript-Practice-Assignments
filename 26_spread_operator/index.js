let array = [1, 2, 3, 4, 5];

let max = Math.max(...array); // 5
let min = Math.min(...array); // 1

console.log("Array length:", array.length);
console.log("Max value:", max);
console.log("Min value:", min);

let username = "Bro Code";
let letter = [...username]; // ['B','r','o',' ','C','o','d','e']
console.log("Letters:", letter);
console.log("Joined with '-':", letter.join("-")); // B-r-o- -C-o-d-e

let fruits = ["apple", "orange", "banana"];
let vegetable = ["carrots", "celery", "potatoes"];
let newFruit = [...fruits, ...vegetable, "eggs", "milks"];

console.log("Combined array:", newFruit);
