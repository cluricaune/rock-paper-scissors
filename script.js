function computerPlay(){
    let randomChoice = Math.floor(Math.random() * 3);
    return randomChoice;
}

function oneRound(){
    let computerChoice = computerPlay();
    let result;
    if (playerChoice === computerChoice) {
        result = "Tie! Go again."
    } else if (playerChoice === 0) {
        if (computerChoice === 1) {
            computerScore += 1;
            result = "Computer wins! Paper beats rock.";
        } else if (computerChoice === 2) {
            playerScore += 1;
            result = "Player wins! Rock beats scissors.";
        }
    } else if (playerChoice === 1) {
        if (computerChoice === 0) {
            playerScore += 1;
            result = "Player wins! Paper beats rock.";
        } else if (computerChoice === 2) {
            computerScore += 1;
            result = "Computer wins! Scissors beat paper.";
        }
    } else if (playerChoice === 2) {
        if (computerChoice === 0) {
            computerScore += 1;
            result = "Computer wins! Rock beats scissors.";
        } else if (computerChoice === 1) {
            playerScore += 1;
            result = "Player wins! Scissors beat paper.";
        }
    }
    else {
        result = "Something is wrong";
    }
    return {
        pc: playerChoice,
        ps: playerScore,
        cc: computerChoice,
        cs: computerScore,
        rs: result
    }
}


let playerScore = 0;
let computerScore = 0;
let playerChoice;

const rock = document.querySelector('#rockshape');
const paper = document.querySelector('#papershape');
const scissors = document.querySelector('#scissorsshape');

rock.addEventListener('click', () => {
  playerChoice = 0;
  let result = oneRound();
  let rockchoice = document.createElement("div");
  rockchoice.style.width = "100px";
  rockchoice.style.height = "100px";
  rockchoice.style.borderRadius = "50%";
  rockchoice.style.backgroundColor = "transparent";
  rockchoice.style.border = "solid 20px black";
  document.querySelector('#game').appendChild(rockchoice);
  console.log(result);
});
paper.addEventListener('click', () => {
    playerChoice = 1;
    let result = oneRound();
    console.log(result);
  });
scissors.addEventListener('click', () => {
    playerChoice = 2;
    let result = oneRound();
    console.log(result);
});

