const prices = [5, 30, 10, 25, 15, 20];
const total = prices.reduce(sum);

const grades = [90, 80, 70, 60, 50, 40];
const maximum = grades.reduce(getMax);

function sum(accumulator, currentValue) {
    return accumulator + currentValue;
}

function getMax(accumulator, currentValue) {
    return Math.max(accumulator, currentValue);
}

document.getElementById("total").textContent = `Total price: $${total.toFixed(2)}`;
document.getElementById("maximum").textContent = `Maximum grade: ${maximum}`;

console.log(`Total price: $${total.toFixed(2)}`); // Total price: $105.00
console.log(`Maximum grade: ${maximum}`); // 90
