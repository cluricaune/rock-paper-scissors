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

let playerScore = 0;
let computerScore = 0;

function oneRound(){
    let playerChoice = prompt("Rock, Paper, or Scissors?", "Rock").toUpperCase();
    let computerChoice = computerPlay().toUpperCase();
    let result;
    if (playerChoice === computerChoice) {
        result = "Tie! Go again."
    } else if (playerChoice === "ROCK") {
        if (computerChoice === "PAPER") {
            computerScore += 1;
            result = "Computer wins! Paper beats rock.";
        } else if (computerChoice === "SCISSORS") {
            playerScore += 1;
            result = "Player wins! Rock beats scissors.";
        }
    } else if (playerChoice === "PAPER") {
        if (computerChoice === "ROCK") {
            playerScore += 1;
            result = "Player wins! Paper beats rock.";
        } else if (computerChoice === "SCISSORS") {
            computerScore += 1;
            result = "Computer wins! Scissors beat paper.";
        }
    } else if (playerChoice === "SCISSORS") {
        if (computerChoice === "ROCK") {
            computerScore += 1;
            result = "Computer wins! Rock beats scissors.";
        } else if (computerChoice === "PAPER") {
            playerScore += 1;
            result = "Player wins! Scissors beat paper.";
        }
    }
    else {
        result = "Uh oh, did you pick rock, paper or scissors? Check spelling.";
    }
    return {
        pc: playerChoice,
        ps: playerScore,
        cc: computerChoice,
        cs: computerScore,
        rs: result
    }
}

let game1 = oneRound();

alert(`${game1.rs}\nPlayer: ${game1.pc} (${game1.ps})\nComputer: ${game1.cc} (${game1.cs})`);

let game2 = oneRound();

alert(`${game2.rs}\nPlayer: ${game2.pc} (${game2.ps})\nComputer: ${game2.cc} (${game2.cs})`);

let game3 = oneRound();

alert(`${game3.rs}\nPlayer: ${game3.pc} (${game3.ps})\nComputer: ${game3.cc} (${game3.cs})`);

let game4 = oneRound();

alert(`${game4.rs}\nPlayer: ${game4.pc} (${game4.ps})\nComputer: ${game4.cc} (${game4.cs})`);

let game5 = oneRound();

alert(`${game5.rs}\nPlayer: ${game5.pc} (${game5.ps})\nComputer: ${game5.cc} (${game5.cs})`);

