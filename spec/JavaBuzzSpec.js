describe('Fizzbuzz in Javascript', function() {

	beforeEach(function() {
		fizzbuzz = new Fizzbuzz;
	});

	describe('should know when a number is divisible', function() {
		it('by three', function() {
			expect(fizzbuzz.isDivisibleByThree(3)).toEqual(true)
		});

		it('by five', function() {
			expect(fizzbuzz.isDivisibleByFive(5)).toEqual(true);
		});

		it('by fifteen', function() {
			expect(fizzbuzz.isDivisibleByFifteen(15)).toEqual(true);
		});

	});

	describe('should know when a number is not', function() {
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

	describe('should say', function() {
		it('Fizz when a number is divisible by three', function() {
			expect(fizzbuzz.play(3)).toEqual('Fizz');
		});

		it('Buzz when a number is divisible by five', function() {
			expect(fizzbuzz.play(5)).toEqual('Buzz')
		});

		it('FizzBuzz when a number is divisible by three and five', function() {
			expect(fizzbuzz.play(15)).toEqual('FizzBuzz');
		});

		it('the number when it is not divisible by three or five', function() {
			expect(fizzbuzz.play(1)).toEqual(1);
		});
	});



});