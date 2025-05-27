const PI = 3.14159;
let radius;

document.getElementById("btnCal").onclick = function() {
    radius = document.getElementById("inputRadius").value;
    circumference = 2 * PI * radius;
    document.getElementById("result").textContent = `Circumference: ${circumference}cm`;
}