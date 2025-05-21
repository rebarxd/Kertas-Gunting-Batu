function getComputerChoice(){
    var computerChoice = Math.floor(Math.random() * 3)
    if (computerChoice == 0){
        return "Kertas"
    } else if (computerChoice == 1){
        return "Gunting"
    } else if (computerChoice == 2){
        return "Batu"
    }
}

console.log(getComputerChoice());

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

var humanScore = 0;
var computerScore = 0;

function playRound(humanChoice, computerChoice){
    if (humanChoice == 0 && computerChoice == 0){
        console.log("Draw")
    } else if(humanChoice == 0 && computerChoice == 1){
        console.log("You lose, system win")
        computerScore++
    } else if (humanChoice == 0 && computerChoice == 2){
        console.log("You Win, system lose")
        humanScore++
    }
}

const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();

playRound(humanSelection, computerSelection);