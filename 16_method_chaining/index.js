document.getElementById('chainBtn').onclick = function() {
    const str = document.getElementById('chainInput').value;
    // Without method chaining
    let trimmed = str.trim();
    let upper = trimmed.toUpperCase();
    let replaced = upper.replace("WORLD", "JAVASCRIPT");
    // With method chaining
    let chained = str.trim().toUpperCase().replace("WORLD", "JAVASCRIPT");
    document.getElementById('chainResult').innerHTML =
        `<strong>Without chaining:</strong> "${replaced}"<br>
            <strong>With chaining:</strong> "${chained}"`;
};