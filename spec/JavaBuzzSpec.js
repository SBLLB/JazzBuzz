
describe('JavaBuzz game', function() {

	beforeEach (function() {
		javabuzz = new Javabuzz;

	});

	describe ('should know when a number is', function() {
		it('divisible by three', function(){
			expect(javabuzz.isDivisibleByThree(3)).toEqual(true);
		});

		it('divisible by five', function(){
			expect(javabuzz.isDivisibleByFive(5)).toEqual(true);
		});

		it('divisible by fifteen', function() {
			expect(javabuzz.isDivisibleByFifteen(15)).toEqual(true);
		});

	});
});