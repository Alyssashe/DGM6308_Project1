export class DogPick {
  constructor(deck, resultDog, hints, errorEl) {
    this.deck = deck;
    this.resultDog = resultDog;
    this.hints = hints;
    this.errorEl = errorEl;
  }

  showDog(dog) {
    this.resultDog.innerHTML = "";

    const title = document.createElement("h2");
    title.textContent = dog.name;

    const img = document.createElement("img");
    img.src = dog.getImageUrl();
    img.alt = dog.name;

    this.resultDog.appendChild(title);
    this.resultDog.appendChild(img);
  }

  handleClick(event) {
    event.target.textContent = "Picking...";

    if (this.hints.length > 0) {
      this.hints[0].textContent = "Waiting...";
    }

    setTimeout(() => {
      try {
        this.errorEl.textContent = "";

        const dog = this.deck.draw();
        this.showDog(dog);
      } catch (error) {
        this.errorEl.textContent = error.message;
        this.errorEl.style.color = "red";
      } finally {
        event.target.textContent = "Pick a Dog";
      }
    }, 500);
  }
}