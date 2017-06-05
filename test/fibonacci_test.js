import { expect } from 'chai'
import fibonacci from '../src/fibonacci'

describe('fibonacci()', function(){
  it('should be a function', function(){
    expect(fibonacci).to.be.a('function')
  })
  it('returns an array of fibonacci numbers to the nth position', function(){
    expect(fibonacci(10)).to.deep.equal([ 0, 1, 1, 2, 3, 5, 8, 13, 21, 34 ])

    expect(fibonacci(15)).to.deep.equal([ 0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, 233, 377 ])
 })
  it('returns an error for a non number', function() {
    expect(fibonacci('Sandwich')).to.deep.equal("Invalid entry, please enter a number")
 })
})
