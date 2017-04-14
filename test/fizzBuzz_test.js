import { expect } from 'chai'
import fizzBuzz from '../src/fizzBuzz'

describe('fizzBuzz()', function(){

  it('should be a function', function(){
    expect(fizzBuzz).to.be.a('function')
  })

  it('returns an array of numbers from 1 to value given', function(){
    const returnArray = fizzBuzz(87)
    expect(returnArray.length).to.equal(87)
  })

  it('replaces mutiples of 3 with the string\'Fizz\', multiples of 5 with \'Buzz\', and multiples of 3 & 5 with \'FizzBuzz\'', function(){
    const returnArray = fizzBuzz(64)

    expect(returnArray[0]).to.eql(1)
    expect(returnArray[2]).to.eql('Fizz')
    expect(returnArray[5]).to.eql('Fizz')
    expect(returnArray[4]).to.eql('Buzz')
    expect(returnArray[14]).to.eql('FizzBuzz')
    expect(returnArray[13]).to.eql(14)
    expect(returnArray[29]).to.eql('FizzBuzz')
  })
})
