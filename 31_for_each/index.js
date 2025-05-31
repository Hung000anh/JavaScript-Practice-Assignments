// JavaScript forEach example

const fruits = ['Apple', 'Banana', 'Cherry', 'Date', 'Elderberry'];

const listElement = document.getElementById('fruit-list');
const button = document.getElementById('run-example');

button.addEventListener('click', () => {
    // Clear the list before running example
    listElement.innerHTML = '';

    // Using forEach to iterate over fruits array
    fruits.forEach((fruit, index) => {
        const li = document.createElement('li');
        li.textContent = `${index + 1}. ${fruit}`;
        listElement.appendChild(li);
    });
});
