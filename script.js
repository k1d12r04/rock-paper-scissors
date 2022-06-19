"use strict";

const buttons = document.querySelectorAll('.btn');

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

let counter = 0;

// Select button

function playGame(e) {

  console.log(this.classList[1]);
  console.log(computerSelection);
 
    // Game logic
    if (computerSelection === this.classList[1]) {
      return "Tie game";
    } else if (computerSelection === "rock" && this.classList[1] === "scissors") {
      computerScore++;
      console.log("Computer selected rock");
      console.log(computerScore);
      return "Computer won";
    } else if (computerSelection === "paper" && this.classList[1] === "rock") {
      computerScore++;
      console.log("Computer selected paper");
      console.log(computerScore);
      return "Computer won";
    } else if (computerSelection === "scissors" && this.classList[1] === "paper") {
      computerScore++;
      console.log("Computer selected scissors");
      console.log(computerScore);
      return "Computer won";
    } else {
      playerScore++;
      console.log(`Player selected ${this.classList[1]}`);
      console.log(playerScore);
      return "Player won";

     
    }
    
  }
  
  


// Listen for button click

buttons.forEach(item => item.addEventListener('click', playGame));





