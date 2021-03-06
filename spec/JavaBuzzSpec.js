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

	describe('say the word', function() {
		it('Fizz instead of multiples of three', function() {
			expect(fizzbuzz.play(3)).toEqual('Fizz');
		});

		it('Buzz instead of multiples of five', function() {
			expect(fizzbuzz.play(5)).toEqual('Buzz');
		});
		it('FizzBuzz instead of multiples of fifteen', function() {
			expect(fizzbuzz.play(15)).toEqual('FizzBuzz');
		});
		it('the number if not a multiple of three, five or fifteen', function() {
			expect(fizzbuzz.play(1)).toEqual(1);
		});
	});
});