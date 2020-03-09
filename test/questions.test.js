const questions = require('../lib/questions');

//Function to test the input is empty or not
describe('confirmAnswerValidator', () => {
    it(`should have function confirmAnswerValidator pass input that is not empty`, () => {
        const input =  questions.confirmAnswerValidator("My repo");
        expect(input).toBe(true);
    });
     
    it('should have function confirmAnswerValidator pass input that is empty', () => {
        const input = questions.confirmAnswerValidator("");
        expect(input).toBe(false);
    });
  });

//Testing for the employee's role 
describe('Checking for employee role entered.', () => {
    it(`should have function confirmRole pass input that is manager or engineer or intern`, () => {
        const input =  questions.confirmRole("engineer");
        expect(input).toBe(true);
    });
      
    it('should have function confirmRole pass input that is not manager or engineer or intern', () => {
        const input = questions.confirmRole("xyz");
        expect(input).toBe(false);
    });
  });

    //Testing for the employee's id is a number or not 
describe('Checking for employee id entered.', () => {
    it(`should have function validateId return true if Id is number`, () => {
        const input =  questions.validateId(9);
        expect(input).toBe(true);
    });
    
    it('should have function validateId return false if Id is not a number', () => {
        const input = questions.validateId("xyz");
        expect(input).toBe(false);
    });
});
  //Testing for the employee's email id format 
describe('Checking for employee email id entered.', () => {
    it(`should have function validateEmail return true that have proper email id format`, () => {
        const input =  questions.validateEmail("e@e.e");
        expect(input).toBe(true);
    });
    
    it('should have function validateEmail return false that do not have proper email id format', () => {
        const input = questions.validateEmail("xyz");
        expect(input).toBe(false);
    });
});

//Testing for the employee's phone number format 
describe('Checking for employee phone number entered.', () => {
    it(`should have function validatePhone return true that have proper email id format`, () => {
        const input =  questions.validatePhone("8765431234");
        expect(input).toBe(true);
    });
  
    it('should have function validatePhone return false that do not have proper email id format', () => {
        const input = questions.validatePhone("876");
        expect(input).toBe(false);
    });
});