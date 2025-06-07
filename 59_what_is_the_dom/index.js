document.title = "My Website";

const username = "bro code"; // Change this to "" to test "Guest"
const welcomeMsg = document.getElementById("welcome-msg");

welcomeMsg.textContent += username.trim() === "" ? "Guest" : username;
