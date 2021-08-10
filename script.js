console.log("Hello, World!");


function computerPlay(){
    let choices = ["Rock", "Paper", "Scissors"];
    let randomChoice = Math.floor(Math.random() * choices.length);
    if (randomChoice === 0) {
        return "Rock";
    } else if (randomChoice === 1) {
        return "Paper";
    } else if (randomChoice === 2) {
        return "Scissors";
    } else {
        return "Error in computerPlay()"
    }
}



function oneRound(){
    let playerChoice = prompt("Rock, Paper, or Scissors?", "Rock").toUpperCase();
    let computerChoice = computerPlay().toUpperCase();
    let playerScore = 0;
    let computerScore = 0;
    game(playerChoice, playerScore, computerChoice, computerScore)
    if (playerChoice === computerChoice) {
        return "Tie! Go again."
    } else if (playerChoice === "ROCK") {
        if (computerChoice === "PAPER") {
            computerScore += 1;
            return "Computer wins! Paper beats rock.";
        } else if (computerChoice === "SCISSORS") {
            playerScore += 1;
            return "Player wins! Rock beats scissors.";
        }
    } else if (playerChoice === "PAPER") {
        if (computerChoice === "ROCK") {
            playerScore += 1;
            return "Player wins! Paper beats rock.";
        } else if (computerChoice === "SCISSORS") {
            computerScore += 1;
            return "Computer wins! Scissors beat paper.";
        }
    } else if (playerChoice === "SCISSORS") {
        if (computerChoice === "ROCK") {
            computerScore += 1;
            return "Computer wins! Rock beats scissors.";
        } else if (computerChoice === "PAPER") {
            playerScore += 1;
            return "Player wins! Scissors beat paper.";
        }
    }
    else {
        return "Uh oh, did you pick rock, paper or scissors? Check spelling.";
    }
    
}
function game() {
    alert(oneRound() + `\nPlayer: ${playerChoice} (${playerScore})\nComputer: ${computerChoice} (${computerScore})`);
}
game();




