import { expect } from 'chai'
import factorialize from '../src/factorial'

describe('factorial()', function(){

  it('should be a function', function(){
    expect(factorial).to.be.a('function')
  })

  it('returns the outout of the factorial)', function(){
    expect(factorialize(5)).to.equal(120)
    expect(factorialize(12)).to.equal(479001600)
    expect(factorialize(8)).to.equal(40320)

  })
})
