function Jazzbuzz() {};

	Jazzbuzz.prototype._isDivisibleBy = function(number, divisor) {
		return(number % divisor === 0)
	};


	Jazzbuzz.prototype.isDivisibleByThree = function(number) {
		return this._isDivisibleBy(number, 3);
	};

	Jazzbuzz.prototype.isDivisibleByFive = function(number) {
		return this._isDivisibleBy(number, 5);
	};

	Jazzbuzz.prototype.isDivisibleByFifteen = function(number) {
		return this._isDivisibleBy(number, 15);
	}

	Jazzbuzz.prototype.say = function(number){
		if (this.isDivisibleByFifteen(number)) return "JazzBuzz";
		if (this.isDivisibleByThree(number)) return "Jazz";
		if (this.isDivisibleByFive(number)) return "Buzz";
	}