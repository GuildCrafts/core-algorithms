import { expect } from 'chai'
import fizzBuzz from '../src/fizzBuzz'

describe('fizzBuzz()', function() {

  it('should be a funcition', function() {
    expect(fizzBuzz).to.be.a('function')
  })

  it('if 3 is a factor, returns the numbers to Fizz', function() {
    const arr = [1, 2, 3, 12, 16]
    expect(fizzBuzz(arr)).to.be.deep.equal([1, 2, 'Fizz', 'Fizz', 16])
  })

  it('if 5 is a factor, returns the numbers to Buzz', function() {
    let arr = [1, 2, 5, 10, 16]
    expect(fizzBuzz(arr)).to.be.deep.equal([1, 2, 'Buzz', 'Buzz', 16])
  })

  it('if 15 is a factor, returns the numbers to FizzBuzz', function() {
    let arr = [1, 2, 15, 30, 16]
    expect(fizzBuzz(arr)).to.be.deep.equal([1, 2, 'FizzBuzz', 'FizzBuzz', 16])
  })
})
