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

		it ('Jazz when number a multiple of 3', function() {
			expect(jazzbuzz.say(3)).toEqual("Jazz");
		});

		it ('Buzz when number is a multiple of 5', function() {
			expect(jazzbuzz.say(5)).toEqual("Buzz");
		});

		it ('JazzBuzz when number is a multiple of 15', function() {
			expect(jazzbuzz.say(15)).toEqual("JazzBuzz");
		});

		it ('the number itself if its not divisble by 3, 5 or 15', function() {
			expect(jazzbuzz.say(1)).toEqual(1);
		});
	});
}); 





