import { expect } from 'chai'
import factorial from '../src/factorial'

describe('factorial()', function(){

  it('should be a function', function(){
    expect(factorial).to.be.a('function')
  })

  it('should return the factorial of a number', function(){
    expect(factorial(5)).to.deep.equal(120)
  })
})
