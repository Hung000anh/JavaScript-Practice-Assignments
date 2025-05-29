document.getElementById('runFor').onclick = function() {
    const max = Number(document.getElementById('maxFor').value);
    let output = '';
    for (let i = 1; i <= max; i++) {
        output += `Count: ${i}<br>`;
    }
    document.getElementById('forResult').innerHTML = output;
};