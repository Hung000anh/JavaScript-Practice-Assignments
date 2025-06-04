const people = [
  { name: 'John', age: 30 },
  { name: 'Jane', age: 25 },
  { name: 'Alice', age: 35 },
  { name: 'Bob', age: 20 },
];

// Sort by age (ascending)
const sortedByAge = [...people].sort((a, b) => a.age - b.age);

// Sort by name (alphabetical)
const sortedByName = [...people].sort((a, b) => a.name.localeCompare(b.name));

const output = document.getElementById("output");
output.textContent = `
Sorted by Age:
${sortedByAge.map(p => `${p.name} (${p.age})`).join('\n')}

Sorted by Name:
${sortedByName.map(p => `${p.name} (${p.age})`).join('\n')}
`;

console.log("Sorted by Age:", sortedByAge);
console.log("Sorted by Name:", sortedByName);
