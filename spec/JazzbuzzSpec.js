describe ('Jazzbuzz', function() { 

	var jazzbuzz;

	beforeEach(function() {
		jazzbuzz = new Jazzbuzz
	});

	describe ('knows when a number is', function() { 

		it('divisible by three', function() { 
			expect(jazzbuzz.isDivisibleBy(3, 3)).toBe(true);
		});

		it ('divisible by five', function() {
			expect(jazzbuzz.isDivisibleBy(5, 5)).toBe(true);
		});

		it('divisible by fifteen', function() {
			expect(jazzbuzz.isDivisibleBy(15, 15)).toBe(true);
		});
	});

	
	describe ('knows when a number is NOT', function() { 

		it('divisible by three', function() { 
			expect(jazzbuzz.isDivisibleBy(2, 3)).toBe(false);
		});

		it('divisible by five', function() {
			expect (jazzbuzz.isDivisibleBy(2, 5)).toBe(false);
		});

		it('divisible by fifteen', function() {
			expect(jazzbuzz.isDivisibleBy(1, 15)).toBe(false);
		});
	});
}); 