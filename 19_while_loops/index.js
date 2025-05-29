document.getElementById('runWhile').onclick = function() {
    const max = Number(document.getElementById('maxCount').value);
    let count = 1;
    let output = '';
    while (count <= max) {
        output += `Count: ${count}<br>`;
        count++;
    }
    document.getElementById('whileResult').innerHTML = output;
};