import { DogDeck } from "./DogDeck.js";
import { DogPick } from "./DogPick.js";

console.log("main loaded");

const result = document.getElementById("result");
const button = document.querySelector("#pickBtn");
const hints = document.getElementsByClassName("hint");

const deck = new DogDeck();
const errorEl = document.getElementById("errorMessage");
const app = new DogPick(deck, result, hints, errorEl);


function clickForPick(event) {
  console.log("clicked");
  app.handleClick(event);
}

button.addEventListener("click", clickForPick);