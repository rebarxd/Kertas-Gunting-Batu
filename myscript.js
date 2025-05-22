function getComputerChoice(){
    return Math.floor(Math.random() * 3);
}

// console.log(getComputerChoice());

function getHumanChoice(){
    var humanChoice = prompt("Pilih antara K = Kertas, G = Gunting, B = Batu")

    humanChoice = humanChoice.toLowerCase()
    if (humanChoice == "kertas"){
        return 0
    } else if (humanChoice == "gunting"){
        return 1
    } else if (humanChoice == "batu") {
        return 2
    } else {
        console.log("Pilihan tidak valid, menggunakan pilihan acak")
        return Math.floor(Math.random()*3);
    }
}

var humanScore = 0;
var computerScore = 0;

function playRound(humanChoice, computerChoice) {

    const choices = ["Kertas", "Gunting", "Batu"];

    console.log(`Human choice: ${choices[humanChoice]}`);
    console.log(`Computer choice: ${choices[computerChoice]}`);

    if (humanChoice === computerChoice) {
        console.log("Draw");
        return;
    }
    
    // Winning conditions for human: 0>1, 1>2, 2>0 (Paper>Scissors, Scissors>Rock, Rock>Paper)
    const humanWins = (humanChoice === 0 && computerChoice === 1) ||
                      (humanChoice === 1 && computerChoice === 2) ||
                      (humanChoice === 2 && computerChoice === 0);
    
    if (humanWins) {
        console.log("You Win, system lose");
        humanScore++;
    } else {
        console.log("You Lose, system win");
        computerScore++;
    }

    console.log(`Current Score - Human: ${humanScore}, Computer: ${computerScore}`);
    console.log("---");
}


function playGame(){
    console.log()
}
// const humanSelection = getHumanChoice();
// const computerSelection = getComputerChoice();

// console.log(`Human choice: ${["Kertas", "Gunting", "Batu"][humanSelection]}`);
// console.log(`Computer choice: ${computerSelection}`);

// playRound(humanSelection, computerSelection);

function playGame() {
    console.log("=== ROCK PAPER SCISSORS - 5 ROUNDS ===");
    humanScore = 0;
    computerScore = 0;
    
    for (let round = 1; round <= 5; round++) {
        console.log(`Round ${round}:`);
        const humanSelection = getHumanChoice();
        const computerSelection = getComputerChoice();
        playRound(humanSelection, computerSelection);
    }
    
    // Determine overall winner
    console.log("=== FINAL RESULTS ===");
    console.log(`Final Score - Human: ${humanScore}, Computer: ${computerScore}`);
    
    if (humanScore > computerScore) {
        console.log("🎉 CONGRATULATIONS! You won the game!");
    } else if (computerScore > humanScore) {
        console.log("😞 Computer wins the game! Better luck next time!");
    } else {
        console.log("🤝 It's a tie! Great game!");
    }
}

playGame()