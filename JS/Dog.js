import { Animal } from "./Animal.js";

export class Dog extends Animal {
  constructor(name, imagePath) {
    super(name, "dog");
    this.imagePath = imagePath;
  }

  getImageUrl() {
    return this.imagePath;
  }
}