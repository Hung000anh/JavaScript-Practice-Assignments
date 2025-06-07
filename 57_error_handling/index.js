function performDivision() {
    try {
        const dividend = Number(window.prompt("Enter a dividend:"));
        const divisor = Number(window.prompt("Enter a divisor:"));

        if (isNaN(dividend) || isNaN(divisor)) {
            throw new Error("Both values must be valid numbers.");
        }

        if (divisor === 0) {
            throw new Error("You can't divide by zero!");
        }

        const result = dividend / divisor;
        console.log(`Result: ${result}`);
        alert(`Result: ${result}`);
    } catch (error) {
        console.error(error);
        alert(`Error: ${error.message}`);
    } finally {
        console.log("Division attempt complete.");
    }
}
