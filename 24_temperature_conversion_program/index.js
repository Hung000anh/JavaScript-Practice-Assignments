const tempertureValue = document.getElementById("temperatureValue");


const checkCelsius = document.getElementById("toCelsius");

const checkFahrenheit = document.getElementById("toFahrenheit");

const result = document.getElementById("result")

function convert() {
    if (tempertureValue.value === "") {
        result.textContent = "Please enter a temperature value.";
        return;
    }

    const temp = parseFloat(tempertureValue.value);

    if (checkCelsius.checked || checkFahrenheit.checked) {
        if (checkFahrenheit.checked) {
        const celsius = ((temp - 32) * 5) / 9;
        result.textContent = `${temp}°F = ${celsius.toFixed(2)}°C`;
        } else {
            const fahrenheit = (temp * 9) / 5 + 32;
            result.textContent = `${temp}°C = ${fahrenheit.toFixed(2)}°F`;
        }
    }
    else
    {
        result.textContent = "Please choose a conversion option.";
        return;
    }

}

