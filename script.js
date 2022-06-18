"use strict";

// Create an array of possible options which computer will choice one of them randomly
const possibleOptions = ["Rock", "Paper", "Scissors"];

// Take user's choice
// let playerMove = prompt("Please write your move: (Rock, Paper or Scissors) ");

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

  // Making case-insensitive the user's and computer's choice
  // let player = playerMove.toLowerCase();
  // let computer = computerPlay().toLowerCase();

  // Game logic
  if (computerSelection === playerSelection) {
    return "Tie game";
  } else if ((computerSelection === "rock") & (playerSelection === "scissors")) {
    console.log("Computer won");
  } else if ((computerSelection === "paper") & (playerSelection === "rock")) {
    return "Computer won";
  } else if ((computerSelection === "scissors") & (playerSelection === "paper")) {
    return "Computer won";
  } else {
    return "Player won";
  }
}

const playerSelection = "rock";
let computerSelection = computerPlay();
computerSelection = computerSelection.toLowerCase();
console.log(playerSelection);
console.log(computerSelection);
console.log(playGame(playerSelection, computerSelection));

playGame();
