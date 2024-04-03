const choices = ["Rock", "Paper", "Scissors"];

for (i=0; i < 5; i++) {
    // Computer's choice
    function getComputerChoice(){
        let randomChoices = Math.floor(Math.random() * choices.length);
        return choices[randomChoices].toLowerCase();
    }
    
    // User's choice
    let playerChoice = prompt("What is your choice? ").toLowerCase();
    function player(player_answer) {
        if (player_answer != "rock" && player_answer != "paper" && player_answer != "scissors") {
            alert("Wrong choice");
        } else {
            return player_answer;
        }
    }
    
    // Comparaison Computer vs User
    function choiceSelection(computerSelection, playerSelection){    
        if (computerSelection == "scissors" && playerSelection == "rock") {
            return alert("You Win! Scissors beats Rock");
        } else if (computerSelection == "paper" && playerSelection == "rock"){
            return alert("You Lose! Paper beats Rock");
        } else if (computerSelection == "paper" && playerSelection == "scissors"){
            return alert("You Win! Scissors beats Paper");
        } else if (computerSelection == "rock" && playerSelection == "scissors"){
            return alert("You Lose! Scissors beats Rock");
        } else if (computerSelection == "rock" && playerSelection == "paper"){
            return alert("You Win! Paper beats Rock");
        } else if (computerSelection == "scissors" && playerSelection == "paper"){
            return alert("You Lose! Scissors beats Paper");
        } else {
            return alert("Equality");
        }
    }

    // Comparaison Computer vs User
    function choiceSelection(computerSelection, playerSelection){    
        if (computerSelection == "scissors" && playerSelection == "rock") {
            return "You Win! Scissors beats Rock";
        } else if (computerSelection == "paper" && playerSelection == "rock"){
            return "You Lose! Paper beats Rock";
        } else if (computerSelection == "paper" && playerSelection == "scissors"){
            return "You Win! Scissors beats Paper";
        } else if (computerSelection == "rock" && playerSelection == "scissors"){
            return "You Lose! Scissors beats Rock";
        } else if (computerSelection == "rock" && playerSelection == "paper"){
            return "You Win! Paper beats Rock";
        } else if (computerSelection == "scissors" && playerSelection == "paper"){
            return "You Lose! Scissors beats Paper";
        } else {
            return "Equality";
        }
    }

    //let game = choiceSelection(getComputerChoice(), player(playerChoice)))
    //let result = 0
    //if (game.includes("Win")) {
    //    result = result += 1;
    //} else {
    //    result = result += result;
    //} 
    console.log(choiceSelection(getComputerChoice(), player(playerChoice)));
    //choiceSelection(getComputerChoice(), player(playerChoice));
}