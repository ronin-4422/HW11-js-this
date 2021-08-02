let counter = {
  step: 0,
  up() {
    this.step++;
    return this;
  },
  down() {
    this.step--;
    return this;
  },
  showStep() {
    return this;
  }
}

counter.up();
counter.up();
console.log(counter.showStep());


function Calculator() {
  
  this.sum = function(x) {
    return function (y){
      return x + y;
    }
  };
  this.multiply = function(x) {
    return function (y){
      return x * y;
    }
  };
  this.subtract = function(x) {
    return function (y){
      return x - y;
    }
  };
  this.divide = function(x) {
    return function (y){
      return x / y;
    }
  };
}
let calculator = new Calculator();

console.log(calculator.sum(8)(3));
console.log(calculator.multiply(10)(3)); //30
console.log(calculator.subtract(35)(20)); //15
console.log(calculator.divide(4)(3));

