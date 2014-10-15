describe('JavaBuzz', function() {

	var javabuzz;

	describe('should know when a number is', function() {

		it('divisible by three', function() {
			javabuzz = new Javabuzz();
			expect(javabuzz.isDivisibleByThree(3)).toEqual(true);
		});
	});

	describe('should know when a number is NOT', function() {
		it('divisible by three', function() {
			javabuzz = new Javabuzz();
			expect(javabuzz.isDivisibleByThree(1)).toEqual(false);
		});
	});

});