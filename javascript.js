
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

function getHumanChoice(){
    let humanChoice = prompt("Input Choice: ");
    return humanChoice.toLowerCase();
}



function playGame(){
    let computerScore = 0;
    let humanScore = 0;

    function playRound(humanChoice, computerChoice){
        switch(computerChoice){
            case "rock"
            :{
                switch(humanChoice){
                    case "rock":
                        console.log("It's a tie");
                        break;
                    case "paper":
                        console.log("You win! Paper beats rock");
                        humanScore += 1;
                        break;
                    case "scissor":
                        console.log("You lose! Rock beats scissor");
                        computerScore += 1;
                        break;
                }
                break;
            }
            case "paper"
            :{
                switch(humanChoice){
                    case "rock":
                        console.log("You lose! Paper beats rock");
                        computerScore += 1;
                        break;
                    case "paper":
                        console.log("It's a tie");
                        break;
                    case "scissor":
                        console.log("You win! Scissor beats paper");
                        humanScore += 1;
                        break;
                }
                break;
            }
            case "scissor"
            :{
                switch(humanChoice){
                    case "rock":
                        console.log("You win! Rock beats scissor");
                        humanScore += 1;
                        break;
                    case "paper":
                        console.log("You lose! Scissor beats paper");
                        computerScore += 1;
                        break;
                    case "scissor":
                        console.log("It's a tie");
                        break;
                }
                break;
            }  
        }
    }

    for (let i = 0; i < 5; i++){
        let humanChoice = getHumanChoice();
        let computerChoice = getComputerChoice();
        playRound(humanChoice, computerChoice);
    }
    (computerScore < humanScore) ? console.log("You are the overall winner") : console.log("You are the overall loser")
}


playGame();
