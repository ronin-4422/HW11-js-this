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


function Calculator(a, b) {
	this.a = a;
  this.b = b;
	this.sum = function() {
		return this.a + this.b;
	};

  this.multiply = function() {
    return this.a * this.b;
  };

  this.subtract = function() {
    return this.a - this.b;
  };

  this.divide = function() {
    return this.a / this.b;
  };
}
let calcSum = new Calculator(8, 3);
let calcMul = new Calculator(10, 3);
let calcSub = new Calculator(35, 20);
let calcDiv = new Calculator(4, 3);

console.log(calcSum.sum());
console.log(calcMul.multiply()); 
console.log(calcSub.subtract()); 
console.log(calcDiv.divide());
