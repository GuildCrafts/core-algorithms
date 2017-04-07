import { expect } from 'chai'
import factorial from '../src/factorial'

describe('factorial()', function(){

  it('should be a function', function(){
    expect(factorial).to.be.function
  })

  it('returns an integer', function(){
    expect(factorial(5)).to.be.integer
  })
})
