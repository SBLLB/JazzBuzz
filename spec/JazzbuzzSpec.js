describe ('Jazzbuzz', function() { 

	var jazzbuzz;

	beforeEach(function() {
		jazzbuzz = new Jazzbuzz
	});

	describe ('knows when a number is', function() { 

		it('divisible by three', function() { 
			expect(jazzbuzz.isDivisibleByThree(3)).toBe(true);
		});

		it ('divisible by five', function() {
			expect(jazzbuzz.isDivisibleByFive(5)).toBe(true);
		});

		it('divisible by fifteen', function() {
			expect(jazzbuzz.isDivisibleByFifteen(15)).toBe(true);
		});
	});

	
	describe ('knows when a number is NOT', function() { 

		it('divisible by three', function() { 
			expect(jazzbuzz.isDivisibleByThree(2)).toBe(false);
		});

		it('divisible by five', function() {
			expect (jazzbuzz.isDivisibleByFive(2)).toBe(false);
		});

		it('divisible by fifteen', function() {
			expect(jazzbuzz.isDivisibleByFifteen(1)).toBe(false);
		});
	});

	describe ('should print', function() {

		it ('print Jazz when number a multiple of 3', function() {
			expect(jazzbuzz.say(3)).toEqual("Jazz");
		});

		it ('print Buzz when number is a multiple of 5', function() {
			expect(jazzbuzz.say(5)).toEqual("Buzz");
		});

		it ('print JazzBuzz when number is a multiple of 15', function() {
			expect(jazzbuzz.say(15)).toEqual("JazzBuzz");
		});
	});
}); 





