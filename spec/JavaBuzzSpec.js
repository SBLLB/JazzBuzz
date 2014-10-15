describe('JavaBuzz game', function() {

	beforeEach(function() {
		javabuzz = new JavaBuzz
	});

	describe('should know when a number is', function() {
		it('divisible by three', function() {
			expect(javabuzz.isDivisibleByThree(3)).toEqual(true);
		});

		it('divisible by five', function() {
			expect(javabuzz.isDivisibleByFive(5)).toEqual(true);
		});
	});

	describe('should know when a number is NOT', function() {
		it('divisible by three', function() {
			expect(javabuzz.isDivisibleByThree(1)).toEqual(false);
		});

		it('divisible by five', function() {
			expect(javabuzz.isDivisibleByFive(1)).toEqual(false);
		});
	});
});