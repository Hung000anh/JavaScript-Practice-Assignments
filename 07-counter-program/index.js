let counter = Number(document.getElementById('counter').textContent);

document.getElementById("increment").onclick = function() {
    counter += 1;
    document.getElementById('counter').textContent = counter;
};

document.getElementById("decrement").onclick = function() {
    counter -= 1;
    document.getElementById('counter').textContent = counter;
};

document.getElementById("reset").onclick = function() {
    counter = 0;
    document.getElementById('counter').textContent = counter;
};