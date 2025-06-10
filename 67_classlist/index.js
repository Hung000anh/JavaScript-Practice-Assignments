const myBtn = document.getElementById("myButton");
const myAdd = document.getElementById("myAdd");

const myRemove = document.getElementById("myRemove");
const myBtn2 = document.getElementById("myButton2");

const myToggle = document.getElementById("myToggle");
const myBtn3 = document.getElementById("myButton3");

const myContains = document.getElementById("myContain");
const myBtn4 = document.getElementById("myButton4");

myBtn2.classList.add("enabled")

myBtn.addEventListener("click", () => {
    myAdd.classList.add("add")
});
myBtn2.addEventListener("click", () => {
    myRemove.classList.remove("remove");
});

myBtn3.addEventListener("click", ()=>{
    myToggle.classList.toggle("toggle")
})

myBtn4.addEventListener("click", ()=>{
    if(!myToggle.classList.contains("toggle"))
        myContains.textContent = "There is no class in Toggle() "
    else
        myContains.textContent = "Toggle() has class"
})