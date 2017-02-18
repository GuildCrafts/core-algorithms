import { expect } from 'chai'
import fizzBuzz from '../src/fizzBuzz'

describe('fizzBuzz', function() {

  it('should be a funcition', function() {
    expect(fizzBuzz).to.be.a('function')
  })

  it('if 3 is a factor, returns the numbers to fizz', function() {
    const arr = [1, 2, 3, 12, 16]
    let a = fizzBuzz(arr)
    expect(a).to.be.equal([[1, 2, 'fizz', 'fizz', 16]])
  })

  it('if 4 is a factor, returns the numbers to buzz', function() {
    let arr = [1, 2, 5, 10, 16]
    let a = fizzBuzz(arr)
    expect(a).to.be.equal([[1, 2, 'buzz', 'buzz', 16]])
  })

  it('if 15 is a factor, returns the numbers to fizzBuzz', function() {
    let arr = [1, 2, 5, 10, 16]
    let a = fizzBuzz(arr)
    expect(a).to.be.equal([[1, 2, 'fizzBuzz', 'fizzBuzz', 16]])
  })
})
