describe('JavaBuzz', function() {

	var javabuzz;

	beforeEach(function(){
		javabuzz = new Javabuzz
	});

	describe('should know when a number is', function() {

		it('divisible by three', function() {
			expect(javabuzz.isDivisibleByThree(3)).toEqual(true);
		});

		it('divisible by five', function() {
			expect(javabuzz.isDivisibleByFive(5)).toEqual(true);
		});

		it('divisible by fifteen', function() {
			expect(javabuzz.isDivisibleByFifteen(15)).toEqual(true);
		});
		
	});

	describe('should know when a number is NOT', function() {
		it('divisible by three', function() {
			expect(javabuzz.isDivisibleByThree(1)).toEqual(false);
		});

		it('divisible by five', function() {
			expect(javabuzz.isDivisibleByFive(2)).toEqual(false);
		});

		it('divisible by fifteen', function() {
			expect(javabuzz.isDivisibleByFifteen(1)).toEqual(false);
		});
	});

	describe('should print', function() {
		it('Java instead of a multiple of three', function() {
			expect(javabuzz.play(3)).toEqual("Java");
		});

		it('Buzz instead of a multiple of five', function() {
			expect(javabuzz.play(5)).toEqual("Buzz");
		});

		it('FizzBuzz instead of a multiple of fifteen', function() {
			expect(javabuzz.play(15)).toEqual("JavaBuzz");
		});

		it('the number if not divisible by 3, 5, or 15', function() {
			expect(javabuzz.play(2)).toEqual(2);
		});
	});

});