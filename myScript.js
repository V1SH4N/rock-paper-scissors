//  script for rock paper scissor game

function getComputerChoice(){
    let computerChoice = parseInt((Math.random() * 3));
    switch (computerChoice){
        case 0:
            return 'rock';
        case 1:
            return 'paper';
        case 2:
            return 'scissor';
    }
}

function getHumanChoice(){
    humanChoice = prompt("Choose either Rock, Paper or Scissors");
    return humanChoice.toLowerCase();

}

function playGame(){
    let humanScore = 0;
    let computerScore = 0;

    function playRound(humanChoice, computerChoice){
        if (computerChoice == 'rock'){
            if (humanChoice == 'rock'){
                console.log("Its a draw.");
            }else if (humanChoice == 'paper'){
                console.log("You win! Paper beats Rock.");
                humanScore += 1;
            }else{
                console.log("You lose! Rock beats scissors.");
                computerScore += 1;
            }
        }else if (computerChoice == 'paper'){
            if (humanChoice == 'rock'){
                console.log("You lose! Paper beats Rock.");
                computerScore += 1;
            }else if (humanChoice == 'paper'){
                console.log("Its a draw.");
            }else{
                console.log("You win! Scissors beats Paper");
                humanScore += 1;
            }
        }else{
            if (humanChoice == 'rock'){
                console.log("You win! Rock beats Scissor.");
                humanScore += 1;
            }else if (humanChoice == 'paper'){
                console.log("You lose! Scissor beats Rock");
                computerScore += 1;
            }else{
                console.log("Its a draw.")
            }
        }
    }


    for(let i = 0; i < 5; i++) {
        let humanSelection = getHumanChoice();
        let computerSelection = getComputerChoice();
        playRound(humanSelection, computerSelection);
    }
    console.log(humanScore);
    console.log(computerScore);

    if (humanScore > computerScore){
        alert("Congratulation! You WON.")
    }else if(computerScore > humanScore){
        alert("You lost.")
    }else{
        alert("It was a draw.")
    }

}

playGame();



