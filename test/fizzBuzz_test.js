import { expect } from 'chai'
import fizzBuzz from '../src/fizzBuzz'

describe('fizzBuzz()', function(){

  it('should be a function', function(){
    expect(fizzBuzz).to.be.a('function')
  })

  it('returns an array of 100 values', function() {
    var fizzBuzzArray = fizzBuzz(100)
    expect(fizzBuzzArray.length).to.deep.equal(100)
  })

  it("replace multiples of 3 as 'Fizz', multiples of 5 as 'Buzz' and multiples of 3 and 5 as 'FizzBuzz' and return numbers that aren't multiples of 3 or 5 ", function(){
    var fizzBuzzArray = fizzBuzz(100)
      expect(fizzBuzzArray[2]).to.eql('Fizz')
      expect(fizzBuzzArray[4]).to.eql('Buzz')
      expect(fizzBuzzArray[14]).to.eql('FizzBuzz')
      expect(fizzBuzzArray[1]).to.eql(2)
    })
  })
