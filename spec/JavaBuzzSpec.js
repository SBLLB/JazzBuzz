
describe('JavaBuzz game', function() {
	describe ('should know when a number is', function() {
		it('divisible by three', function(){
			javabuzz = new Javabuzz;
			expect(javabuzz.isDivisibleByThree(3)).toEqual(true);
		});

		it('divisible by five', function(){
			javabuzz = new Javabuzz;
			expect(javabuzz.isDivisibleByFive(5)).toEqual(true);
		});

	});
});