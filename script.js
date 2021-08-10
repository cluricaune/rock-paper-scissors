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

let playerChoice = prompt("Rock, Paper, or Scissors?", "Rock").toUpperCase();
let computerChoice = computerPlay().toUpperCase();

function oneRound(){
    if (playerChoice === "ROCK") {
        if (computerChoice === "ROCK") {
            return "Tie! Go again.";
        } else if (computerChoice === "PAPER") {
            return "Computer wins! Paper beats rock.";
        } else if (computerChoice === "SCISSORS") {
            return "Player wins! Rock beats scissors."
        }
    } else if (playerChoice === "PAPER") {
        if (computerChoice === "ROCK") {
            return "Player wins! Paper beats rock.";
        } else if (computerChoice === "PAPER") {
            return "Tie! Go again.";
        } else if (computerChoice === "SCISSORS") {
            return "Computer wins! Scissors beat paper.";
        }
    } else if (playerChoice === "SCISSORS") {
        if (computerChoice === "ROCK") {
            return "Computer wins! Rock beats scissors.";
        } else if (computerChoice === "PAPER") {
            return "Player wins! Scissors beat paper.";
        } else if (computerChoice === "SCISSORS") {
            return "Tie! Go again.";
        }
    } else {
        return "Uh oh, did you pick rock, paper or scissors? Check spelling."
    }
}
alert(oneRound() + `\nPlayer: ${playerChoice}\nComputer: ${computerChoice}`)
