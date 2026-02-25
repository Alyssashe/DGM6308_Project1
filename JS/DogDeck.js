import { Dog } from "./Dog.js";

export class DogDeck {
  constructor() {
    this.dogs = [
      new Dog("Shiba Inu", "images/ShibaLnu.webp"),
      new Dog("Cocker Spaniel", "images/Cocker.avif"),
      new Dog("Golden Retriever", "images/GoldenRetrieber.jpg"),
      new Dog("Samoyed", "images/Samoyed.jpeg")
    ];

    this.lastIndex = -1;
  }

  // pick a random dog from the deck
 draw() {
  if (this.dogs.length === 0) {
    throw new Error("No dogs left! Please refresh the page.");
  }

  const randomNumber = Math.random();
  const scaledNumber = randomNumber * this.dogs.length;
  const index = Math.floor(scaledNumber);

  // Remove the drawn dog. After drawing, length = 0
  return this.dogs.splice(index, 1)[0];
}
}