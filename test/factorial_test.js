import { expect } from 'chai'
import factorial from '../src/factorial'

describe.only('factorial()', function(){

  it('should be a function', function(){
    expect(factorial).to.be.a('function')
  })

  it('returns an array of numbers 1-100, fizz for multiples of 3, buzz for multiples of 5, fizzbuzz for multiples of 3 and five', function(){
    expect(factorial(5)).to.deep.equal(120)
  }) 
})
