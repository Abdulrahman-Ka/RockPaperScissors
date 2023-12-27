const elements = ['rock', 'paper', 'scissors'];
const choices = document.querySelectorAll("button");
const result = document.querySelector(".result");
const para = document.createElement("p");
let playerSelection = '';
let winnerPara = document.createElement("p");
let scorePara = document.createElement("p");
choices.forEach( (choice) => {choice.addEventListener("click", () =>{
        playerSelection = choice.name;
        game();
})});

let computerScore = 0, playerScore = 0;
function getComputerChoice() {
    return elements[Math.floor(Math.random() * 3)];
}
function playRound(playerSelection, computerSelection) {
    if (playerSelection === 'rock' && computerSelection === 'paper') {
        computerScore++;
        return `You Lose! ${computerSelection} beats ${playerSelection}`;    
    } else if (playerSelection == 'rock' && computerSelection == 'scissors') {
        playerScore++;
        return `You Win! ${playerSelection} beats ${computerSelection}`;
    } else if (playerSelection == 'rock' && computerSelection == 'rock') {
        return `Equal! ${computerSelection} Equals ${playerSelection}`;
    } else if (playerSelection == 'paper' && computerSelection == 'rock') {
        playerScore++;
        return `You Win! ${playerSelection} beats ${computerSelection}`;
    } else if (playerSelection == 'paper' && computerSelection == 'paper') {
        return `Equal! ${computerSelection} Equals ${playerSelection}`;
    } else if (playerSelection == 'paper' && computerSelection == 'scissors') {
        playerScore++;
        return `You Win! ${playerSelection} beats ${computerSelection}`;
    } else if (playerSelection == 'scissors' && computerSelection == 'rock') {
        computerScore++;
        return `You Lose! ${computerSelection} beats ${playerSelection}`;    
    } else if (playerSelection == 'scissors' && computerSelection == 'paper') {
        playerScore++;
        return `You Win! ${playerSelection} beats ${computerSelection}`;
    } else if (playerSelection == 'scissors' && computerSelection == 'scissors') {
        return `Equal! ${computerSelection} Equals ${playerSelection}`;
    }
}
function game() {
    para.textContent = "";
    winnerPara.textContent = "";
        const computerSelection = getComputerChoice();
        para.textContent += `Your Choice: ${playerSelection}, Computer Choice: ${computerSelection}\n`;
        para.textContent = playRound(playerSelection, computerSelection);
        scorePara.textContent =  `Player Score: ${playerScore} Computer Score: ${computerScore}`;
    result.appendChild(para);
    result.appendChild(scorePara);
    if (computerScore === 5 || playerScore === 5) {
        choices.forEach((choice) => {
            choice.disabled = true;
            choice.style.animation = "none";
        })
        winnerPara.textContent = `The Winner is: ${computerScore>playerScore? 'Computer :(': playerScore > computerScore? "You ;)": "No One"} \nReload To Play Again :)`;
        result.appendChild(winnerPara);
        computerScore = 0;
        playerScore = 0;
        return ;
    }
}