describe('A game of Fizzbuzz should', function() {

	beforeEach(function() {
		fizzbuzz = new Fizzbuzz
	});

	describe('know when a number is', function() {

		it('divisible by three', function() {
			expect(fizzbuzz.isDivisibleByThree(3)).toEqual(true);
		});

		it('divisible by five', function() {
			expect(fizzbuzz.isDivisibleByFive(5)).toEqual(true);
		});

		it('divisible by fifteen', function() {
			expect(fizzbuzz.isDivisibleByFifteen(15)).toEqual(true);
		});
	});

	describe('know when a number is NOT', function() {
		it('divisible by three', function() {
			expect(fizzbuzz.isDivisibleByThree(1)).toEqual(false);
		});

		it('divisible by five', function() {
			expect(fizzbuzz.isDivisibleByFive(1)).toEqual(false);
		});	

		it('divisible by fifteen', function() {
			expect(fizzbuzz.isDivisibleByFifteen(1)).toEqual(false);
		});
	});
});