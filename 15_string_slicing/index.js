document.getElementById('sliceBtn').onclick = function() {
    const str = document.getElementById('sliceInput').value;
    const start = Number(document.getElementById('startIndex').value);
    const end = Number(document.getElementById('endIndex').value);
    let result = `<strong>slice(${start}, ${end}):</strong> "${str.slice(start, end)}"<br>`;
    result += `<strong>substring(${start}, ${end}):</strong> "${str.substring(start, end)}"<br>`;
    document.getElementById('sliceResult').innerHTML = result;
};