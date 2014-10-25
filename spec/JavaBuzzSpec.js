describe('FizzBuzz', function(){

	describe('should know when a number is', function() {

		it('divisible by three', function() {
			fizzbuzz = new Fizzbuzz;
			expect(fizzbuzz.isDivisibleByThree(3)).toEqual(true);
		});

		it('divisible by five', function() {
			fizzbuzz = new Fizzbuzz;
			expect(fizzbuzz.isDivisibleByFive(5)).toEqual(true);
		});
	});
});