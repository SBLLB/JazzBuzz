describe('Fizzbuzz', function() {

	beforeEach(function() {
		fizzbuzz = new Fizzbuzz;
	});

	describe('should know when a number is', function() {

		it('divisible by three', function() {
			expect(fizzbuzz.isDivisibleByThree(3)).toEqual(true);
		});


		it('divisible by five', function() {
			expect(fizzbuzz.isDivisibleByFive(5)).toEqual(true);
		});

		it('divisible by fifteen', function() {
			expect(fizzbuzz.isDivisibleByFive(15)).toEqual(true);
		});
	});

		describe('should know when a number is NOT', function() {

		it('divisible by three', function() {
			expect(fizzbuzz.isDivisibleByThree(1)).toEqual(false);
		});


		it('divisible by five', function() {
			expect(fizzbuzz.isDivisibleByFive(1)).toEqual(false);
		});

		it('divisible by fifteen', function() {
			expect(fizzbuzz.isDivisibleByFive(1)).toEqual(false);
		});
	});

});