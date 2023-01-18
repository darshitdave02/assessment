const { bestScore, calculateScore} = require('./scoreCalculation')

describe('Score Calculation',() => {
    describe('Checking Inputs',() => {
  
      it('Should throw an error when input is not an array',() => {
              
             
        expect(()=> calculateScore('abs')).toThrow('Input is not an array');
      });
  
      it('Should throw an error when array has an element which is not a number',() => {
              
             
        expect(()=> calculateScore([3, 6, 3, 6, 3, 6, 3, 6, 3, 'hello', 3, 6, 3, 6, 3, 6, 3, 6, 3, 6])).toThrow('Array should consist of numbers only');
      });

      it('Should throw an error when frame size is not valid',() => {
              
             
        expect(()=> calculateScore([3, 6, 3, 6, 6, 3, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6])).toThrow('Invalid Input');
      });


      

    })
  
    });