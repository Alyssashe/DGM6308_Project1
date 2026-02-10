class Animal {
  constructor(name, type) {
    this.name = name;
    this.type = type;
  }

  getInfo() {
    return this.name + " is a " + this.type;
  }
}

class Dog extends Animal {
  constructor(name, imagePath) {
    super(name, "dog"); 
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

    this.lastIndex = -1;
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
  constructor(deck, resultDog) {
    this.deck = deck;
    this.resultDog = resultDog;
  }

  showDog(dog) {
  this.resultDog.innerHTML = "";
  let title = document.createElement("h2");
  title.textContent = dog.name;

  let img = document.createElement("img");
  img.src = dog.getImageUrl();
  img.alt = dog.name;

  this.resultDog.appendChild(title);
  this.resultDog.appendChild(img);
}
  
  handleClick(event) {
   event.target.textContent = "Picking...";

  if (hints.length > 0) {
    hints[0].textContent = "Waiting...";
  }

  setTimeout(() => {
    const dog = this.deck.draw();
    this.showDog(dog);

    event.target.textContent = "Pick a Dog";
  }, 500);
  }
}

console.log("script loaded");

const result = document.getElementById("result");
const button = document.querySelector("#pickBtn");
const hints = document.getElementsByClassName("hint");

const deck = new DogDeck();
const app = new DogPick(deck, result);

function clickForPick(event){
  console.log("clicked");
  app.handleClick(event);
}

button.addEventListener("click", clickForPick);