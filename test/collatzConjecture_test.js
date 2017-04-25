import { expect } from 'chai'
import collatzConjecture from '../src/collatzConjecture'

describe('collatzConjecture()', function(){

  it('should be a function', function(){
    expect(collatzConjecture).to.be.a('function')
  })
  it('returns a Collatz sequence for any positive integer', function(){
    expect(collatzConjecture(7)).to.eql([7, 22, 11, 34, 17, 52, 26, 13, 40, 20, 10, 5, 16, 8, 4, 2, 1])
    expect(collatzConjecture(3)).to.eql([3, 10, 5, 16, 8, 4, 2, 1])
  })

  it('throws an error for any invalid inputs', function() {
    expect(function() {collatzConjecture(-1)}).to.throw('Invalid input format. Expected a positive integer')
    expect(function() {collatzConjecture('seven')}).to.throw('Invalid input format. Expected a positive integer')
  })
})
