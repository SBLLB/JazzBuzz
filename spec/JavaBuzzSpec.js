describe('FizzBuzz', function(){

	describe('should know when a number is', function() {

		it('divisible by three', function() {
			fizzbuzz = new Fizzbuzz;
			expect(fizzbuzz.isDivisibleByThree(3)).toEqual(true);
		});
	});
});