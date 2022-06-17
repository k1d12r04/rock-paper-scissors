"use strict";
const possibleOptions = ["Rock", "Paper", "Scissors"];

function randomNumber() {
  return Math.floor(Math.random() * 3);
}

function computerPlay() {
  console.log(possibleOptions[randomNumber()]);
}

computerPlay();
