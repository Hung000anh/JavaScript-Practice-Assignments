const myBox = document.getElementById("myBox");
const myButton = document.getElementById("myButton");

myButton.addEventListener("click", () => {
    myBox.textContent = "OUCH!";
    myBox.style.backgroundColor = "Tomato";
});

myButton.addEventListener("mouseover", () => {
    myBox.textContent = "Don't do it!";
    myBox.style.backgroundColor = "yellow";
});

myButton.addEventListener("mouseout", () => {
    myBox.textContent = "Hello";
    myBox.style.backgroundColor = "lightgreen";
});
