let randomNubmer1;
let randomNubmer2;
let randomNubmer3;


buttonRoll = document.getElementById("roll");

buttonRoll.onclick = function() {
    randomNubmer1 = Math.floor(Math.random() * 6) + 1;
    randomNubmer2 = Math.floor(Math.random() * 6) + 1;
    randomNubmer3 = Math.floor(Math.random() * 6) + 1;
    
    document.getElementById("label1").textContent = randomNubmer1;
    document.getElementById("label2").textContent = randomNubmer2;
    document.getElementById("label3").textContent = randomNubmer3;
}
