// Function to get the computer's choice randomly
function getComputerChoice() {
    let choice = Math.floor(Math.random() * 3) + 1;
    if (choice === 1) {
        return "rock";
    } else if (choice === 2) {
        return "paper";
    } else {
        return "scissors";
    }
}

// Function to get the human player's choice
function getHumanChoice() {
    return prompt('What\'s your choice?', '').toLowerCase();
}

// Initialize scores
let humanScore = 0;
let computerScore = 0;

// Function to play a single round of the game
function playGame() {

    const humanSelection = getHumanChoice();
    const computerSelection = getComputerChoice();

    // Function to handle the result of a round
    function playRound(humanChoice, computerChoice) {
        if ((humanChoice === "rock" && computerChoice === "rock") ||
            (humanChoice === "scissors" && computerChoice === "scissors") ||
            (humanChoice === "paper" && computerChoice === "paper")) {
            let tieResult = "Oops. No score added this time.\n[" + humanChoice + " vs. " + computerChoice + " results in a tie] \nCurrent Scores: Your Score: " + humanScore + " | Computer Score: " + computerScore;
            alert(tieResult);
            console.log(tieResult);
        } else if ((humanChoice === "rock" && computerChoice === "scissors") ||
            (humanChoice === "scissors" && computerChoice === "paper") ||
            (humanChoice === "paper" && computerChoice === "rock")) {
            humanScore++;
            let winResult = "You win!\n[" + humanChoice + " beats " + computerChoice + "]\nCurrent Scores: Your Score: " + humanScore + " | Computer Score: " + computerScore;
            alert(winResult);
            console.log(winResult);
        } else if ((humanChoice === "rock" && computerChoice === "paper") ||
            (humanChoice === "scissors" && computerChoice === "rock") ||
            (humanChoice === "paper" && computerChoice === "scissors")) {
            computerScore++;
            let loseResult = "You lose.\n[" + humanChoice + " loses to " + computerChoice + "]\nCurrent Scores: Computer wins! Your Score: " + humanScore + " | Computer Score: " + computerScore;
            alert(loseResult);
            console.log(loseResult);
        } else {
            console.log("Invalid input.");
        }
    }

    playRound(humanSelection, computerSelection);
}

// Function to start and manage the game flow
function startGame() {
    console.log("Info: There are only 5 rounds in this game. Good luck!");

    for (let i = 1; i <= 5; i++) {

        console.log(i + getOrdinalSuffix(i) + " Round");
        playGame();

        if (computerScore >= 3 || humanScore >= 3) {
            checkEarlyWinner();
            break;
        }

        if (i === 5) {
            console.log("Final Results:\nComputer Score: " + computerScore + ", Your Score: " + humanScore);
            resetGame();
        }
    }
}

startGame();

// Function to get the correct ordinal suffix for round numbers
function getOrdinalSuffix(num) {
    switch (num) {
        case 1:
            return "st";
        case 2:
            return "nd";
        case 3:
            return "rd";
        case 4:
        case 5:
            return "th";
    }
}

// Function to check for an early winner
function checkEarlyWinner() {
    if (computerScore === 3) {
        console.log("The computer is the first to reach 3 points. The computer wins.\nScores: Computer Score: " + computerScore + " | Your Score: " + humanScore);
        resetGame();
    } else if (humanScore === 3) {
        console.log("Congrats! You're the first to reach 3 points. You win.\nScores: Computer Score: " + computerScore + " | Your Score: " + humanScore);
        resetGame();
    }
}

// Function to reset the game
function resetGame() {
    let user = prompt("Do you want to play again? Type 'Start' to begin again or 'Exit' to leave the game.", '').toLowerCase();
    if (user === "start") {
        humanScore = 0;
        computerScore = 0;
        startGame();
    } else if (user === "exit" || user === null || user === "") {
        alert("Goodbye.");
    } else {
        console.log("Invalid input. Please type 'Start' or 'Exit'.");
        resetGame();
    }
}
