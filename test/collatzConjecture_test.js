import { expect } from 'chai'
import collatzConjecture from '../src/collatzConjecture'

describe('collatzConjecture()', function(){
  it('should be a function', function(){
    expect(collatzConjecture).to.be.a('function')
})
  it('returns the collatz sequence for a given positive integer in an array', function() {
    expect(collatzConjecture(1)).to.deep.equal([1])

    expect(collatzConjecture(7)).to.deep.equal([7, 22, 11, 34, 17, 52, 26, 13, 40, 20, 10, 5, 16, 8, 4, 2, 1])
})
  it('returns an error for a non number', function() {
    expect(collatzConjecture('Hello')).to.deep.equal("Invalid entry, please enter a positive integer")
})
  it('returns an error for a negative number', function() {
    expect(collatzConjecture(-5)).to.deep.equal("Invalid entry, please enter a positive integer")
})
  it('returns an error for a float', function() {
    expect(collatzConjecture(3.6)).to.deep.equal("Invalid entry, please enter a positive integer")
})
})
