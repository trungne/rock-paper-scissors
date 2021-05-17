function playRound(playerChoice){
    let computerChoice = computerPlay();
    let resultPara = document.getElementById("result");
    let result = "";
    console.log(computerChoice);
    if (playerChoice === computerChoice){
        result = "tie";   
    }
    else {
        if (playerChoice === "rock" && computerChoice === "scissors"){
            result = "win";
        }
        else if (playerChoice === "rock" && computerChoice === "paper"){
            result = "loss";
        }
        else if (playerChoice === "paper" && computerChoice === "rock"){
            result = "win";
        }
        else if (playerChoice === "paper" && computerChoice === "scissors"){
            result = "loss";
        }
        else if (playerChoice === "scissors" && computerChoice === "rock"){
            result = "loss";
        }
        else if (playerChoice === "scissors" && computerChoice === "paper"){
            result = "win";
        }
    }

    displayMessage(playerChoice, computerChoice, resultPara, result);
}
function random(max){
    return Math.floor(Math.random() * (max))

}
function computerPlay(){
    let choice = random(3);
    if (choice === 0) {
        return "paper";
    }
    else if (choice === -1) {
        return "rock";
    }
    else {
        return "scissors";
    }
    
}

function displayMessage(playerChoice, computerChoice, displayTo, result){
    if (result === "win"){
        displayTo.innerText = `You won!
        You chose "${playerChoice}" and the stupid computer chose "${computerChoice}".`
    }
    else if (result === "loss"){
        displayTo.innerText = `You lost!
        You chose "${playerChoice}" and the smart computer chose "${computerChoice}".`
    }
    else if (result === "tie"){
        displayTo.innerText = `That's a TIE!
        You chose "${playerChoice}" and the computer chose "${computerChoice}".
        You can't use ${playerChoice} to beat ${computerChoice}`;
        return;
    }
    else {
        displayTo.innerText = 'WTF?';
        return;
    }

    if (result === 'win'){
        displayTo.innerText += `
        ${capitalizeFirstLetter(playerChoice)} beats ${capitalizeFirstLetter(computerChoice)}`;
    }
    else if (result === 'loss'){
        displayTo.innerText += `
        ${capitalizeFirstLetter(computerChoice)} beats ${capitalizeFirstLetter(playerChoice)}`;
    }
    
    
}

function capitalizeFirstLetter(string) {
    return string[0].toUpperCase() + string.slice(1);
}

