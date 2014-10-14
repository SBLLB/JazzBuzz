describe ('Jazzbuzz', function() { 

	var jazzbuzz;

	describe ('knows when a number is', function() { 

		it('divisible by three', function() { 
			jazzbuzz = new Jazzbuzz();  
			expect(jazzbuzz.isDivisibleByThree(3)).toBe(true);
		});

		it ('divisible by five', function() {
			jazzbuzz = new Jazzbuzz();
			expect(jazzbuzz.isDivisibleByFive(5)).toBe(true);
		});

		it('divisible by fifteen', function() {
			jazzbuzz = new Jazzbuzz();
			expect(jazzbuzz.isDivisibleByFifteen(15)).toBe(true);
		});
	});

	
	describe ('knows when a number is NOT', function() { 

		it('divisible by three', function() { 
			jazzbuzz = new Jazzbuzz();  
			expect(jazzbuzz.isDivisibleByThree(2)).toBe(false);
		});

		it('divisible by five', function() {
			jazzbuzz = new Jazzbuzz ();
			expect (jazzbuzz.isDivisibleByFive(2)).toBe(false);
		});

		it('divisible by fifteen', function() {
			jazzbuzz = new Jazzbuzz();
			expect(jazzbuzz.isDivisibleByFifteen(1)).toBe(false);
		});
	});
}); 