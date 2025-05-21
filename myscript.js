function getComputerChoice(){
    var computerChoice = Math.floor(Math.random() * 3)
    if (computerChoice == 0){
        return 0;
    } else if (computerChoice == 1){
        return 1;
    } else if (computerChoice == 2){
        return 2;
    }
}

// console.log(getComputerChoice());

function getHumanChoice(){
    var humanChoice = prompt("Pilih antara K = Kertas, G = Gunting, B = Batu")
    if (humanChoice == "K"){
        return 0
    } else if (humanChoice == "G"){
        return 1
    } else if (humanChoice == "B") {
        return 2
    }
}

// console.log(getHumanChoice());

var humanScore = 0;
var computerScore = 0;

function playRound(humanChoice, computerChoice){
    if (humanChoice == computerChoice){
        console.log("Draw");
    } else if (humanChoice == 0 && computerChoice == 1){  // Kertas vs Gunting
        console.log("You Win, system lose");
        humanScore++;
    } else if (humanChoice == 0 && computerChoice == 2){  // Kertas vs Batu
        console.log("You Lose, system win");
        computerScore++;
    } else if (humanChoice == 1 && computerChoice == 0){  // Gunting vs Kertas
        console.log("You Lose, system win");
        computerScore++;
    } else if (humanChoice == 1 && computerChoice == 2){  // Gunting vs Batu
        console.log("You Win, system lose");
        humanScore++;
    } else if (humanChoice == 2 && computerChoice == 0){  // Batu vs Kertas
        console.log("You Win, system lose");
        humanScore++;
    } else if (humanChoice == 2 && computerChoice == 1){  // Batu vs Gunting
        console.log("You Lose, system win");
        computerScore++;
    }
}

const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();

console.log(`Human choice: ${["Kertas", "Gunting", "Batu"][humanSelection]}`);
console.log(`Computer choice: ${computerSelection}`);

playRound(humanSelection, computerSelection);