let numbers = [1, 2, 3, 4, 5, 6, 7];
let evenNumbers = numbers.filter(isEven);
let oddNumbers = numbers.filter(isOdd);

const ages = [12, 15, 18, 20, 22, 25, 30];
const adults = ages.filter(isAdult);
const children = ages.filter(isChild);

const words = ["hello", "world", "JavaScript", "filter"];
const shortWords = words.filter(isShort);
const longWords = words.filter(isLong);

// Functions
function isEven(num) {
    return num % 2 === 0;
}

function isOdd(num) {
    return num % 2 !== 0;
}

function isAdult(age) {
    return age >= 18;
}

function isChild(age) {
    return age < 18;
}

function isShort(word) {
    return word.length < 5;
}

function isLong(word) {
    return word.length >= 5;
}

// Display results
document.getElementById('even').textContent = evenNumbers.join(', ');
document.getElementById('odd').textContent = oddNumbers.join(', ');
document.getElementById('adults').textContent = adults.join(', ');
document.getElementById('children').textContent = children.join(', ');
document.getElementById('shortWords').textContent = shortWords.join(', ');
document.getElementById('longWords').textContent = longWords.join(', ');
