describe('JavaBuzz', function(){

	beforeEach(function(){
		javabuzz = new JavaBuzz;
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
			expect(javabuzz.isDivisibleByFive(1)).toEqual(false);
		});

		it('divisible by fifteen', function() {
			expect(javabuzz.isDivisibleByFifteen(1)).toEqual(false);
		});
	});

	describe('shoudl print', function() {
		it('Java instead of multiples of three', function() {
			expect(javabuzz.play(3)).toEqual("Java")
		});

		it('Buzz instead of multiples of five', function() {
			expect(javabuzz.play(5)).toEqual("Buzz");
		});

		it('JavaBuzz instead of multiples of fifteen', function() {
			expect(javabuzz.play(15)).toEqual("JavaBuzz");
		});

		it('the number itself when not a multiple of 3,5, 15', function() {
			expect(javabuzz.play(1)).toEqual(1);
		});
	});
});