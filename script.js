
/*Function which radomly selects computer's choice of weapon*/
function getComputerChoice() {
    let num = Math.floor(Math.random() * 3);
    let computerChoice;
    
    if( num == 0){
        computerChoice = "Rock";
    }
    else if(num == 1){
        computerChoice = "Paper";
    }
    else{
        computerChoice = "Scissors";
    }

    return computerChoice;
    
}

/*Function witch compares players choices and determines whether player wins or loses*/
function playRound() {
    let playerSelection = prompt("Rock, Paper or Scissors?");
    let computerSelection = getComputerChoice();
    let gameResult;
    /*converts all input to lowercase*/
    playerSelection = playerSelection.toLowerCase();
    computerSelection = computerSelection.toLowerCase();
    /*If player chooses rock*/
    if (playerSelection === "rock" && computerSelection === "scissors") {
        gameResult = "You win! Rock breaks scissors.";
    }
    else if (playerSelection === "rock" && computerSelection === "paper") {
        gameResult = "You lose! Paper covers rock.";
    }
    /*If player chooses paper*/
    else if (playerSelection === "paper" && computerSelection === "rock") {
        gameResult = "You win! Paper covers rock.";
    }
    else if (playerSelection === "paper" && computerSelection === "scissors") {
        gameResult = "You lose! Scissors cuts paper.";
    }
    /*If player chooses scissors*/
    else if (playerSelection === "scissors" && computerSelection === "paper") {
        gameResult = "You win! Scissors cuts paper.";
    }
    else if (playerSelection === "scissors" && computerSelection === "rock") {
        gameResult = "You lose! Rock breaks scissors.";
    }
    /*If player and computer choose the same weapon*/
    else if(playerSelection === computerSelection){
        gameResult = "It's a tie! You've both selected the same.";
    }
    else{
        gameResult="Invalid input";
    }
    document.getElementById("result").innerHTML=gameResult;
}

