function sum(...numbers) {
  return numbers.reduce((total, num) => total + num, 0);
}

function showSum() {
  const result = sum(4, 5, 6);
  document.getElementById("output").innerText = `sum(4, 5, 6) = ${result}`;
}