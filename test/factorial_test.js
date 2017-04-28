import { expect } from 'chai'
import { factorial } from '../src/factorial'

describe('factorial()', function(){

  it('should be a function', function(){
    expect(factorial).to.be.a('function')
  })

  it('returns the factorial of any fiven number', function() {
    expect(factorial(5)).to.eql(120)
    expect(factorial(4)).to.eql(24)
  })
})
