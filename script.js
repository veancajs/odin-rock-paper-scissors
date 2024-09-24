const rock = document.querySelector("#rock");
const paper = document.querySelector("#paper");
const scissors = document.querySelector("#scissors");
const results = document.querySelector("#results");

results.textContent = "There are only 5 rounds in this game. Good luck!";

function getComputerChoice() {
    let choice = ["rock", "paper", "scissors"]
    return choice[Math.floor(Math.random() * choice.length)];
}

function getHumanChoice() {
    rock.addEventListener("click", function () {
        playGame("rock");
    })

    paper.addEventListener("click", function () {
        playGame("paper");
    })

    scissors.addEventListener("click", function () {
        playGame("scissors");
    })
}

getHumanChoice();

let humanScore = 0;
let computerScore = 0;
let round = 0;

function playGame(humanSelection) {

    const computerSelection = getComputerChoice();

    round++;

    function playRound(humanChoice, computerChoice) {
        if ((humanChoice === "rock" && computerChoice === "rock") ||
            (humanChoice === "scissors" && computerChoice === "scissors") ||
            (humanChoice === "paper" && computerChoice === "paper")) {
            results.textContent = "Round " + round + ": Oops. No score added this time. [" + humanChoice + " vs. " + computerChoice + " results in a tie] Current Scores: Your Score: " + humanScore + " | Computer Score: " + computerScore;
        } else if ((humanChoice === "rock" && computerChoice === "scissors") ||
            (humanChoice === "scissors" && computerChoice === "paper") ||
            (humanChoice === "paper" && computerChoice === "rock")) {
            humanScore++;
            results.textContent = "Round " + round + ": You win! [" + humanChoice + " beats " + computerChoice + "] Current Scores: Your Score: " + humanScore + " | Computer Score: " + computerScore;
        } else if ((humanChoice === "rock" && computerChoice === "paper") ||
            (humanChoice === "scissors" && computerChoice === "rock") ||
            (humanChoice === "paper" && computerChoice === "scissors")) {
            computerScore++;
            results.textContent = "Round " + round + ": You lose. [" + humanChoice + " loses to " + computerChoice + "] Current Scores: Your Score: " + humanScore + " | Computer Score: " + computerScore;
        } else {
            results.textContent = "Invalid input.";
        }
    }

    playRound(humanSelection, computerSelection);

    startGame();
}

function hideDisplay(param) {
    param.style.display = "none";
}

function hideButtons() {
    hideDisplay(rock);
    hideDisplay(paper);
    hideDisplay(scissors);
}

function startGame() {
    if (computerScore >= 3 || humanScore >= 3) {
        hideButtons();
        checkEarlyWinner();
    }

    if (round === 5) {
        hideButtons();
        if (humanScore > computerScore) {
            results.textContent = "Round " + round + ": You win! Computer Score: " + computerScore + " | Your Score: " + humanScore + ". Refresh the browser to play again.";
        } else {
            results.textContent = "Round " + round + ": You lose. Computer Score: " + computerScore + " | Your Score: " + humanScore + ". Refresh the browser to play again.";
        }
    }
}

function checkEarlyWinner() {
    if (computerScore === 3 && round < 5) {
        results.textContent = "Round " + round + ": The computer is the first to reach 3 points. The computer wins. Scores: Computer Score: " + computerScore + " | Your Score: " + humanScore + ". Refresh the browser to play again.";
    } else if (humanScore === 3 && round < 5) {
        results.textContent = "Round " + round + ": Congrats! You're the first to reach 3 points. You win. Scores: Computer Score: " + computerScore + " | Your Score: " + humanScore + ". Refresh the browser to play again.";
    }
}