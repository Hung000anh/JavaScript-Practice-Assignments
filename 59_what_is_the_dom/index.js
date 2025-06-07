document.title = "My website"
document.body.style.backgroundColor = "hsl(0, 0%, 15%)"
console.dir(document)

const username = " bro code";
const welcomeMsg = document.getElementById("welcome-msg")
welcomeMsg.textContent += username === "" ? 'Guest' : username;

console.dir(document);
