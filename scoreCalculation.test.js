const {  calculateScore} = require('./scoreCalculation');

describe('Score Calculation',() => {
  describe('Checking Inputs',() => {

    it('Test case - 1 ', () => {
      let result = calculateScore([3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6]);
      expect(result).toBe(90);
    });

    it('Test case - 2 ', () => {
      let result = calculateScore([0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 10, 10, 10]);
      expect(result).toBe(30);
    });

    it('Test case - 3 ', () => {
      let result = calculateScore([6, 4, 3, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
      expect(result).toBe(16);
    });

    it('Should throw an error when input is not an array',() => {
              
             
      expect(()=> calculateScore('abs')).toThrow('Input is not an array');
    });
  
    it('Should throw an error when array has an element which is not a number',() => {
              
             
      expect(()=> calculateScore([3, 6, 3, 6, 3, 6, 3, 6, 3, 'hello', 3, 6, 3, 6, 3, 6, 3, 6, 3, 6])).toThrow('Array should consist of numbers only');
    });

    it('Should throw an error when frame size is not valid',() => {
              
             
      expect(()=> calculateScore([3, 6, 3, 6, 6, 3, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6])).toThrow('Invalid Input');
    });

  });
  
});