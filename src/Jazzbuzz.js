function Jazzbuzz() {};

	// Jazzbuzz.prototype.isDivisibleByThree = function(number) {
	// 	return (number % 3 === 0);
	// };

	// Jazzbuzz.prototype.isDivisibleByFive = function(number) {
	// 	return(number % 5 === 0);
	// };

	// Jazzbuzz.prototype.isDivisibleByFifteen = function(number) {
	// 	return(number % 15 === 0);
	// }

	Jazzbuzz.prototype.isDivisibleBy = function(number, divisor) {
		return(number % divisor === 0)
	};