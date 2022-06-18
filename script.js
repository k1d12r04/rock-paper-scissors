"use strict";

// Create an array of possible options which computer will choice one of them randomly
const possibleOptions = ["Rock", "Paper", "Scissors"];

// Take user's choice
let playerMove = prompt("Please write your move: (Rock, Paper or Scissors) ");

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
  // Take computer's choice which is generated randomly
  computerPlay();

  // Making case-insensitive the user's and computer's choice
  let player = playerMove.toLowerCase();
  let computer = computerPlay().toLowerCase();

  // Game logic
  if (
    !player ||
    player == " " ||
    player != "paper" ||
    player != "rock" ||
    player != "scissors"
  ) {
    console.log("Please enter a valid move");
    playGame();
  } else if (computer === player) {
    console.log("Tie game");
  } else if ((computer === "rock") & (player === "scissors")) {
    console.log("Computer won");
  } else if ((computer === "paper") & (player === "rock")) {
    console.log("Computer won");
  } else if ((computer === "scissors") & (player === "paper")) {
    console.log("Computer won");
  } else {
    console.log("Player won");
  }
}

playGame();
