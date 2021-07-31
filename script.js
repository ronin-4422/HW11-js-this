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


function calculator() {
	
	this.sum = function(num1, num2) {
		return num1+num2;
	};
	
	this.multiply = function(num1, num2) {
		return num1*num2;
	};
	
	this.subtract = function(num1, num2) {
		return num1-num2;
	};
  
  this.divide = function(num1, num2) {
		return num1/num2;
	};
}

let calc = new calculator();

console.log(calc.sum(8,3)); //11
console.log(calc.multiply(10,3)); //30
console.log(calc.subtract(35,20)); //15
console.log(calc.divide(4,3)); //1.3333333333333333
