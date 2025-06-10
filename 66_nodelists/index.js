
let buttonList = document.querySelectorAll(".myButton")

console.log(buttonList)
buttonList.forEach(button =>{
    button.addEventListener("mouseover", () =>{
        button.style.backgroundColor = "yellow"
        button.textContent = "Don't Click 😲"
    })
    button.addEventListener("mouseout", () =>{
        button.style.backgroundColor = "rgb(76, 160, 255)"
        button.textContent = "Hello 😊"
    })
    button.addEventListener("click", event =>{
        event.target.remove();
        buttonList = document.querySelectorAll(".myButton")
        console.log(buttonList)
    })
})