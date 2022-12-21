function Dog(name) {
    this.name = name;
  }
  
  let beagle = new Dog("Snoopy");
  
  // Only change code below this line
  console.log(Dog.prototype.isPrototypeOf(beagle));
  beagle = {
    constructor: Dog,
    numLegs: 4
  };
  console.log(beagle.constructor);
  console.log(Dog.prototype.isPrototypeOf(beagle));