
function rollDice()
{
    const numOfDice = document.getElementById("numOfDice").value
    const resultNumbers = document.getElementById("resultNumbers")
    const resultImages = document.getElementById("resultImages")
    const values = [];
    const images = [];
    for(let i = 0; i< numOfDice; i++)
    {
        const value = Math.floor(Math.random() *6) +1;
        values.push(value)
        images.push(`<img src="dice_images/Dice-${value}.png">`)
    }
    resultNumbers.textContent =  values.join(', ');
    resultImages.innerHTML = images.join('');
    console.log(values)
    console.log(images)
}

