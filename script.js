function computerPlay(){
    let randomChoice = Math.floor(Math.random() * 3);
    return randomChoice;
}

let playerScore = 0;
let computerScore = 0;
let playerChoice;

function oneRound(){
    let computerChoice = computerPlay();
    let result;
    if (playerChoice === computerChoice) {
        result = "T"
    } else if (playerChoice === 0) {
        if (computerChoice === 1) {
            computerScore += 1;
            result = "CW";
        } else if (computerChoice === 2) {
            playerScore += 1;
            result = "PW";
        }
    } else if (playerChoice === 1) {
        if (computerChoice === 0) {
            playerScore += 1;
            result = "PW";
        } else if (computerChoice === 2) {
            computerScore += 1;
            result = "CW";
        }
    } else if (playerChoice === 2) {
        if (computerChoice === 0) {
            computerScore += 1;
            result = "CW";
        } else if (computerChoice === 1) {
            playerScore += 1;
            result = "PW";
        }
    }
    else {
        result = "ERROR";
    }
    return {
        pc: playerChoice,
        ps: playerScore,
        cc: computerChoice,
        cs: computerScore,
        rs: result
    }
}

function rockChoice(porc) {
    let rockChoice = document.createElement("div");
    rockChoice.setAttribute("id", "rockdiv");
    rockChoice.style.width = "100px";
    rockChoice.style.height = "100px";
    rockChoice.style.borderRadius = "50%";
    rockChoice.style.backgroundColor = "transparent";
    rockChoice.style.border = "solid 20px white";
    rockChoice.style.marginLeft = "-10px";
    rockChoice.style.marginRight = "-10px";
    document.querySelector("#game").appendChild(rockChoice);
}

function paperChoice(porc) {
    let paperChoice = document.createElement("div");
    paperChoice.setAttribute("id", "paperdiv");
    paperChoice.style.width = "75px";
    paperChoice.style.height = "100px";
    paperChoice.style.backgroundColor = "transparent";
    paperChoice.style.border = "solid 20px white";
    paperChoice.style.borderRadius = "0%";
    paperChoice.style.paddingLeft = "2px";
    paperChoice.style.paddingRight = "3px";
    document.querySelector("#game").appendChild(paperChoice);
}

function scissorsChoice(porc) {
    let scissorsChoice = document.createElement("div");
    scissorsChoice.setAttribute("id", "scissorsdiv");
    let scissors1 = document.createElement("div");
    scissors1.setAttribute("id", "scissors1div");
    scissors1.style.width = "20px";
    scissors1.style.height = "150px";
    scissors1.style.backgroundColor = "white";
    scissors1.style.transform = "rotate(-40deg)";
    let scissors2 = document.createElement("div");
    scissors2.setAttribute("id", "scissors2div");
    scissors2.style.width = "20px";
    scissors2.style.height = "150px";
    scissors2.style.backgroundColor = "white";
    scissors2.style.transform = "rotate(40deg)";
    scissorsChoice.style.display = "flex";
    scissorsChoice.style.justifyContent = "center";
    scissorsChoice.style.width = "120px";
    scissorsChoice.style.height = "120px";
    scissorsChoice.style.marginBottom = "15px";
    document.querySelector("#game").appendChild(scissorsChoice);
    document.querySelector("#scissorsdiv").appendChild(scissors1);
    document.querySelector("#scissorsdiv").appendChild(scissors2);
}

function scissorsCompChoice() {
    let scissorsChoice = document.createElement("div");
    scissorsChoice.setAttribute("id", "scissorsdiv2");
    let scissors1 = document.createElement("div");
    scissors1.style.width = "20px";
    scissors1.style.height = "150px";
    scissors1.style.backgroundColor = "white";
    scissors1.style.transform = "rotate(-40deg)";
    let scissors2 = document.createElement("div");
    scissors2.style.width = "20px";
    scissors2.style.height = "150px";
    scissors2.style.backgroundColor = "white";
    scissors2.style.transform = "rotate(40deg)";
    scissorsChoice.style.display = "flex";
    scissorsChoice.style.justifyContent = "center";
    scissorsChoice.style.width = "120px";
    scissorsChoice.style.height = "120px";
    scissorsChoice.style.marginBottom = "15px";
    document.querySelector("#game").appendChild(scissorsChoice);
    document.querySelector("#scissorsdiv2").appendChild(scissors1);
    document.querySelector("#scissorsdiv2").appendChild(scissors2);
}

function slashShape() {
    let slashShape = document.createElement("div");
    slashShape.style.width = "20px";
    slashShape.style.height = "150px";
    slashShape.style.backgroundColor = "white";
    slashShape.style.marginLeft = "50px";
    slashShape.style.marginRight = "50px";
    document.querySelector("#game").appendChild(slashShape);
}

const rock = document.querySelector('#rockshape');
const paper = document.querySelector('#papershape');
const scissors = document.querySelector('#scissorsshape');

rock.addEventListener('click', () => {
    let count = 0;
    let id = setInterval(fadeOut, 30);
    function fadeOut() {
        let fadeTarget = document.querySelector("#rockshape");
        if (!fadeTarget.style.opacity) {
            fadeTarget.style.opacity = 1;
        }
        if (count < 10) {
            fadeTarget.style.opacity -= 0.1;
        } else if (count === 10) {
            fadeTarget.style.opacity = 1;
            playerChoice = 0;
            let result = oneRound();
          
            let clearGame = document.querySelector("#game")
            while (clearGame.firstChild) {
                clearGame.lastChild.remove();
            }
          
            rockChoice();
          
            slashShape();
            
            let compChoice = document.createElement("div");
            compChoice.setAttribute("id", "compChoice");
            if (result.cc === 0) {
              rockChoice();
            } else if (result.cc === 1) {
              paperChoice();
            } else if (result.cc === 2) {
              scissorsCompChoice();
            }
            document.querySelector("#game").appendChild(compChoice);
          
            if (result.rs === "PW") {
              document.querySelector("#playerscore").innerHTML = result.ps;
              document.querySelector("#rockdiv").style.border = "solid 20px rgb(0, 255, 255)";
            } else if (result.rs === "CW") {
              document.querySelector("#computerscore").innerHTML = result.cs;
            }
          
            console.log(result);
            clearInterval(id);
        }
        count++;
    }
});

paper.addEventListener('click', () => {
    let count = 0;
    let id = setInterval(fadeOut, 30);
    function fadeOut() {
        let fadeTarget = document.querySelector("#papershape");
        if (!fadeTarget.style.opacity) {
            fadeTarget.style.opacity = 1;
        }
        if (count < 10) {
            fadeTarget.style.opacity -= 0.1;
        } else if (count === 10) {
            fadeTarget.style.opacity = 1;
            playerChoice = 1;
            let result = oneRound();
        
            let clearGame = document.querySelector("#game")
            while (clearGame.firstChild) {
                clearGame.lastChild.remove();
            }
        
            paperChoice();
        
            slashShape();
        
            let compChoice = document.createElement("div");
            compChoice.setAttribute("id", "compChoice");
            if (result.cc === 0) {
              rockChoice();
            } else if (result.cc === 1) {
              paperChoice();
            } else if (result.cc === 2) {
              scissorsCompChoice();
            }
            document.querySelector("#game").appendChild(compChoice);
        
            if (result.rs === "PW") {
                document.querySelector("#playerscore").innerHTML = result.ps;
                document.querySelector("#paperdiv").style.border = "solid 20px rgb(0, 255, 255)";
            } else if (result.rs === "CW") {
                document.querySelector("#computerscore").innerHTML = result.cs;
            }
        
            console.log(result);
            clearInterval(id);
        }
        count++;
    }
});

scissors.addEventListener('click', () => {
    let count = 0;
    let id = setInterval(fadeOut, 30);
    function fadeOut() {
        let fadeTarget = document.querySelector("#scissorsshape");
        if (!fadeTarget.style.opacity) {
            fadeTarget.style.opacity = 1;
        }
        if (count < 10) {
            fadeTarget.style.opacity -= 0.1;
        } else if (count === 10) {
            fadeTarget.style.opacity = 1;
            playerChoice = 2;
            let result = oneRound();
        
            let clearGame = document.querySelector("#game")
            while (clearGame.firstChild) {
                clearGame.lastChild.remove();
            }
            
            scissorsChoice();
        
            slashShape();
        
            let compChoice = document.createElement("div");
            compChoice.setAttribute("id", "compChoice");
            if (result.cc === 0) {
                rockChoice();
            } else if (result.cc === 1) {
                paperChoice();
            } else if (result.cc === 2) {
                scissorsCompChoice();
            }
            document.querySelector("#game").appendChild(compChoice);
        
            if (result.rs === "PW") {
                document.querySelector("#playerscore").innerHTML = result.ps;
                document.querySelector("#scissors1div").style.backgroundColor = "rgb(0, 255, 255)";
                document.querySelector("#scissors2div").style.backgroundColor = "rgb(0, 255, 255)";
            } else if (result.rs === "CW") {
                document.querySelector("#computerscore").innerHTML = result.cs;
            }
        
            console.log(result);
            clearInterval(id);
        }
        count++;
    }
});

