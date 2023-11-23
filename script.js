const elements = ['rock', 'paper', 'scissors'];
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
    computerScore = 0;
    playerScore = 0;
    for (let index = 0; index < 5; index++) {
        const playerSelection = prompt("Rock Paper Scissors ?",elements[Math.floor(Math.random() * 3)]);
        const computerSelection = getComputerChoice();
        console.log(`Your Choice: ${playerSelection}, Computer Choice: ${computerSelection}`);
        console.log(playRound(playerSelection, computerSelection));
    }
    return `Player Score: ${playerScore}, Computer Score: ${computerScore}\nThe Winner is: ${computerScore>playerScore? 'Computer': 'You'}.`;
}
console.log(game());