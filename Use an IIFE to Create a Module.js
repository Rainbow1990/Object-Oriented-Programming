let funModule = (function() {
  return {
    isCuteMixin: function(obj) {
      obj.cute = function() {
        console.log("Yes I'm cute.");
        return true;
      }
    },
    singMixin: function(obj) {
      obj.sing = function() {
        console.log("Singing to an awesome tune");
      }
    }
  }
})();

  function Bird(name) {
    this.name = name;
  }
  let bigBird = new Bird("Big Bird");
  
  funModule.singMixin(bigBird);
  bigBird.sing();