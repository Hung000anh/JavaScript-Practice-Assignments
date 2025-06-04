const fruits = [
  { name: 'Apple', color: 'red', calories: 52 },
  { name: 'Banana', color: 'yellow', calories: 89 }, 
  { name: 'Cherry', color: 'red', calories: 50 },
  { name: 'Date', color: 'brown', calories: 277 },
  { name: 'Elderberry', color: 'black', calories: 73 },
  { name: 'Fig', color: 'purple', calories: 74 },
  { name: 'Grape', color: 'green', calories: 69 },
  { name: 'Honeydew', color: 'green', calories: 36 }
];

const output = document.getElementById("output");

fruits.forEach(fruit => {
  console.log(`Name: ${fruit.name}, Color: ${fruit.color}, Calories: ${fruit.calories}`);
});

const fruitNames = fruits.map(fruit => fruit.name);
const lowCalorieFruits = fruits.filter(fruit => fruit.calories < 100);
const totalCalories = fruits.reduce((total, fruit) => total + fruit.calories, 0);

output.textContent = `
Names: ${fruitNames.join(', ')}

Low Calorie Fruits (< 100):
${lowCalorieFruits.map(f => `${f.name} (${f.calories} cal)`).join('\n')}

Total Calories: ${totalCalories}
`;
