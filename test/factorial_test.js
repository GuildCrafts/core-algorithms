import { expect } from 'chai'
import factorial from '../src/factorial'

describe('factorial()', function(){
  it('should be a function', function(){
    expect(factorial).to.be.a('function')
  })

  it('returns the factorial of the argument', function(){
    expect(factorial(3)).to.deep.equal(6)
    expect(factorial(10)).to.deep.equal(3628800)
    expect(factorial(7)).to.deep.equal(5040)
    expect(factorial(0)).to.deep.equal(1)
  })

  it('does not work with non-numbers or negative numbers', function(){
    expect(factorial('string')).to.deep.equal('Invalid input')
    expect(factorial(-5)).to.deep.equal('Invalid input')
  })
})
