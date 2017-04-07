import { expect } from 'chai'
import fizzBuzz from '../src/fizzBuzz'

describe('fizzBuzz()', () =>{

  it('should be a function', function(){
    expect(fizzBuzz).to.be.a('function')
  })

  it('Check that Array has 100 elements', () => {
    expect(fizzBuzz().length).to.equal(100);
  })

  it('Checks for "Fizz", "Buzz", and "FizzBuzz" changes', () => {
    let array = fizzBuzz();

    let countFizz = 0;
    for (let i = 0; i < array.length; i++) {
      if (i % 15 != 0) {
          if (array[i] === "Fizz") { countFizz++; }
      }
    }

    let countBuzz = 0;
    for (let i = 0; i < array.length; i++) {
      if (i % 15 != 0) {
          if (array[i] === "Buzz") { countBuzz++; }
      }
    }

    let countFizzBuzz = 0;
    for (let i = 0; i < array.length; i++) {
      if (i % 15 != 0) {
          if (array[i] === "FizzBuzz") { countFizzBuzz++; }
      }
    }

    expect(countFizz).to.equal(27);
    expect(countBuzz).to.equal(14);
    expect(countFizzBuzz).to.equal(6);
  })

});
