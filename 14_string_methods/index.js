document.getElementById('analyzeBtn').onclick = function() {
    const str = document.getElementById('inputString').value;
    let html = `<strong>Length:</strong> ${str.length}<br>`;
    html += `<strong>Uppercase:</strong> ${str.toUpperCase()}<br>`;
    html += `<strong>Lowercase:</strong> ${str.toLowerCase()}<br>`;
    html += `<strong>Trimmed:</strong> "${str.trim()}"<br>`;
    html += `<strong>Slice (1, 5):</strong> "${str.slice(1, 5)}"<br>`;
    html += `<strong>Includes "a":</strong> ${str.includes("a")}<br>`;
    html += `<strong>Index of "a":</strong> ${str.indexOf("a")}<br>`;
    html += `<strong>Last index of "a":</strong> ${str.lastIndexOf("a")}<br>`;
    html += `<strong>Split by space:</strong> [${str.split(" ").join(", ")}]`;
    document.getElementById('stringResults').innerHTML = html;
};