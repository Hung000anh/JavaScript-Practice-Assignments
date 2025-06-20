const names = ["A", "B", "C", "D"];
const person = { "Name": "A", "age": 21, "isEmployee": true };
const people = [
  { "Name": "B", "age": 20, "isEmployee": true },
  { "Name": "C", "age": 19, "isEmployee": false },
  { "Name": "D", "age": 26, "isEmployee": true },
  { "Name": "E", "age": 30, "isEmployee": false },
  { "Name": "F", "age": 32, "isEmployee": true }
];

const namesString = JSON.stringify(names);
const personString = JSON.stringify(person);
const peopleString = JSON.stringify(people);

console.log("➡ Stringify:");
console.log(namesString);
console.log(personString);
console.log(peopleString);

const jsonNames = JSON.parse(namesString);
const jsonPerson = JSON.parse(personString);
const jsonPeople = JSON.parse(peopleString);

console.log("⬅ Parse:");
console.log(jsonNames);
console.log(jsonPerson);
console.log(jsonPeople);

// Fetch from JSON files
fetch("names.json")
  .then(response => response.json())
  .then(value => console.log("📂 names.json", value));

fetch("person.json")
  .then(response => response.json())
  .then(value => console.log("📂 person.json", value));

fetch("people.json")
  .then(response => response.json())
  .then(value => console.log("📂 people.json", value));
