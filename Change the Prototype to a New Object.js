function Dog(name) {
    this.name = name;
  }
  
  Dog.prototype = {
    // Only change code below this line
    numLegs: 4,
    eat: function() {
      console.log("eat eat eat")
    },
    describe: function() {
      console.log("My name is " + this.name);
    }
  };
  let sam = new Dog("Sam");
  console.log(sam)
  sam.describe();