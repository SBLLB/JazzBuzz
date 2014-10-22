
describe('JavaBuzz game', function() {
	describe ('should know when a number is', function() {
		it('divisible by three', function(){
			javabuzz = new Javabuzz;
			expect(javabuzz.isDivisibleByThree(3)).toEqual(true);
		});
	});
});