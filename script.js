"use strict";

// Create an array of possible options which computer will choice one of them randomly
const possibleOptions = ["rock", "paper", "scissors"];

let computerSelection = computerPlay();
let playerScore = 0;
let computerScore = 0;
let playerSelection;

// Generate a random number to reveal computer's choice
function randomNumber() {
  return Math.floor(Math.random() * 3);
}

// Random number created between 0 to 2 If 1 is created, the choice will be paper
// which is placed second index in the "possibleOptions" array
function computerPlay() {
  return possibleOptions[randomNumber()];
}

// Main game function
function playGame(playerSelection, computerSelection) {
  // Game logic
  if (computerSelection === playerSelection) {
    return "Tie game";
  } else if (computerSelection === "rock" && playerSelection === "scissors") {
    computerScore++;
    console.log("Computer selected rock");
    console.log(computerScore);
    return "Computer won";
  } else if (computerSelection === "paper" && playerSelection === "rock") {
    computerScore++;
    console.log("Computer selected paper");
    console.log(computerScore);
    return "Computer won";
  } else if (computerSelection === "scissors" && playerSelection === "paper") {
    computerScore++;
    console.log("Computer selected scissors");
    console.log(computerScore);
    return "Computer won";
  } else {
    playerScore++;
    console.log(`Player selected ${playerSelection}`);
    console.log(playerScore);
    return "Player won";
  }
}


// Main game function
// function game() {
  
//     // Take user's choice
//     playerSelection = prompt(
//       "Please write your move: (Rock, Paper or Scissors) "
//     );
//     // Making case-insensitive the user's choice
//     playerSelection.toLowerCase();
//     console.log(playerSelection);
//     console.log(computerSelection);
    
//     console.log(playGame(playerSelection, computerSelection));
//   }

  if (playerScore > computerScore) {
    console.log(`Player's score: ${playerScore} - Computer's score: ${computerScore} So, player won the game`);
  }

  if (computerScore > playerScore) {
    console.log(`Player's score: ${playerScore} - Computer's score: ${computerScore} So, computer won the game`);
  }
  


// game();
