class Dog {
  constructor(name, imagePath) {
    this.name = name;
    this.imagePath = imagePath;
  }

  getImageUrl() {
    return this.imagePath;
  }
}

class DogDeck {
  constructor() {
    this.dogs = [
      new Dog("Shiba Inu", "images/ShibaLnu.webp"),
      new Dog("Cocker Spaniel", "images/Cocker.avif"),
      new Dog("Golden Retriever", "images/GoldenRetrieber.jpg"),
      new Dog("Samoyed", "images/Samoyed.jpeg")
    ];
  }

  // pick a random dog from the deck
  draw() {
  let randomNumber = Math.random();   
  let scaledNumber = randomNumber * this.dogs.length;
  let index = Math.floor(scaledNumber);

  return this.dogs[index];
}
}

class DogPick {
  constructor(deck, resultEl) {
    this.deck = deck;
    this.resultEl = resultEl;
  }

  showDog(dog) {
  this.resultEl.innerHTML = "";

  let title = document.createElement("h2");
  title.textContent = dog.name;

  let img = document.createElement("img");
  img.src = dog.getImageUrl();
  img.alt = dog.name;

  this.resultEl.appendChild(title);
  this.resultEl.appendChild(img);
}
  
  handleClick(event) {
    event.target.textContent = "Picking...";

    const dog = this.deck.draw();
    this.showDog(dog);
  }
}

console.log("script loaded");

const result = document.getElementById("result");
const button = document.getElementById("pickBtn");

const deck = new DogDeck();
const app = new DogPick(deck, result);

button.addEventListener("click", (event) => {
  console.log("clicked");
  app.handleClick(event);
});