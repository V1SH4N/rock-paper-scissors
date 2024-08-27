function getComputerChoice(){
    let computerChoice = Math.floor(Math.random() * 3);
    switch(computerChoice) {
        case 0:
            return "rock";
        case 1:
            return "paper";
        case 2:
            return "scissor";
    }
}

function playRound(humanChoice, computerChoice){
    switch(computerChoice){
        case "rock"
        :{
            switch(humanChoice){
                case "rock":
                    return("It's a tie");
                case "paper":
                    humanScore += 1;
                    return("Paper beats rock");
                case "scissor":
                    computerScore += 1;
                    return("Scissor loses to rock");
            }
        }
        case "paper"
        :{
            switch(humanChoice){
                case "rock":
                    computerScore += 1;
                    return("Rock loses to paper");
                case "paper":
                    return("It's a tie");
                case "scissor":
                    humanScore += 1;
                    return("Scissor beats paper");
            }
        }
        case "scissor"
        :{
            switch(humanChoice){
                case "rock":
                    humanScore += 1;
                    return("Rock beats scissor");
                case "paper":
                    computerScore += 1;
                    return("Paper loses to scissor");
                case "scissor":
                    return("It's a tie");
            }
        }  
    }
}

let computerScore = 0;
let humanScore = 0;

const buttons = document.querySelector('#buttons');
const gameStatus = document.querySelector('#status');
const scoreHuman = document.querySelector('#scoreHuman')
const scoreComputer = document.querySelector('#scoreComputer');
///const output = document.querySelector('#output');

buttons.addEventListener('click',(Event) =>{

    let resultStatus;

    if (humanScore < 5 && computerScore < 5){
        switch (Event.target.id){
            case 'rock':
                resultStatus = playRound('rock',getComputerChoice());
                break;
            case 'paper':
                resultStatus = playRound('paper',getComputerChoice());
                break;
            case 'scissor':
                resultStatus = playRound('scissor',getComputerChoice());
                break
        } 
    }

    scoreHuman.textContent = humanScore;
    scoreComputer.textContent = computerScore;

    if (humanScore == 5){
        gameStatus.textContent = "Congratulation, you won!!";
        return;
    } else if (computerScore == 5){
        gameStatus.textContent = "You lost.";
        return;
    }
    gameStatus.textContent = resultStatus;
})





