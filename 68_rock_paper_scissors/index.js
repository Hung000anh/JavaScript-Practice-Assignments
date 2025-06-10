const choices = ["rock", "paper", "scissors"];
const playerDisplay = document.getElementById("playerDisplay");
const computerDisplay = document.getElementById("computerDisplay");
const resultDisplay = document.getElementById("resultDisplay");
const playerScoreDisplay = document.getElementById("playerScoreDisplay");
const computerScoreDisplay = document.getElementById("computerScoreDisplay");

let playerScore = 0;
let computerScore = 0;

function playGame(playerChoice){
    const computerChoice = choices[Math.floor(Math.random() * 3)];
    let result = "";
    if(playerChoice === computerChoice)
        result = "IT's A TIE!";
    else{
        switch(playerChoice){
            case "rock":
                result = (computerChoice === "scissors") ? "YOU WIN" && playerScore++ : "YOU LOSE" && computerScore++;
                break;
            case "paper":
                result = (computerChoice === "scissors") ? "YOU LOSE"  && computerScore++ : "YOU WIN" && playerScore++;
                break;
            case "scissors":
                result = (computerChoice === "rock") ? "YOU LOSE" && computerScore++ : "YOU WIN"  && playerScore++;
                break;
            }
    }
    playerDisplay.textContent = `Player: ${playerChoice}`;
    computerDisplay.textContent =`Computer: ${computerChoice}`;
    resultDisplay.textContent = result
    playerScoreDisplay.textContent = playerScore;
    computerScoreDisplay.textContent = computerScore;
    resultDisplay.classList.remove("win", "lose", "tie")
    if(result === "YOU WIN")
        resultDisplay.classList.add("win");
    else if (result === "YOU LOSE")
        resultDisplay.classList.add("lose");
    else
        resultDisplay.classList.add("tie");
}