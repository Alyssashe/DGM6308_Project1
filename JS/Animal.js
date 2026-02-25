export class Animal {
  constructor(name, type) {
    this.name = name;
    this.type = type;
  }

  getInfo() {
    return this.name + " is a " + this.type;
  }
}