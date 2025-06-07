

try {
    const dividend = Number(window.prompt("Enter a dividend: "));
    const divisor = Number(window.prompt("Enter a divisor: "));

    if(divisor ==0)
        throw new Error("you can't divide by zero!")

    if(isNaN(dividend) || isNaN(divisor))
        throw new Error("Values must be number")
    const result = dividend/ divisor;
    console.log(result)
} catch (error) {
    console.log(error)
}
