document.getElementById('checkBtn').onclick = function() {
    const checkbox = document.getElementById('myCheckbox');
    const maleRadio = document.getElementById('maleRadio');
    const femaleRadio = document.getElementById('femaleRadio');
    let result = "";

    if (checkbox.checked) {
        result += "Checkbox is checked!<br>";
    } else {
        result += "Checkbox is not checked.<br>";
    }

    if (maleRadio.checked) {
        result += "Male radio is selected.";
    } else if (femaleRadio.checked) {
        result += "Female radio is selected.";
    } else {
        result += "No gender selected.";
    }

    document.getElementById('result').innerHTML = result;
};