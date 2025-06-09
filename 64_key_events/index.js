const myBox = document.getElementById("myBox");

let position = {
  top: 0,
  left: 0,
};

const step = 10;

document.addEventListener("keydown", (event) => {
  switch (event.key) {
    case "ArrowUp":
      position.top -= step;
      break;
    case "ArrowDown":
      position.top += step;
      break;
    case "ArrowLeft":
      position.left -= step;
      break;
    case "ArrowRight":
      position.left += step;
      break;
    default:
      return; // Exit if it's not an arrow key
  }

  myBox.textContent = "😲";
  myBox.style.backgroundColor = "tomato";
  myBox.style.top = position.top + "px";
  myBox.style.left = position.left + "px";
});

document.addEventListener("keyup", () => {
  myBox.textContent = "😊";
  myBox.style.backgroundColor = "lightgreen";
});
