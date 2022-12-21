function Dog(name, color, height) {
  this.name = name;
  this.color = color;
  this.numLegs = 4;
  this.height = height;
}
let terrier = new Dog("Sam", "White", "50cm");
console.log(terrier);