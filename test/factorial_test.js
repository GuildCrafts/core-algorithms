import { expect } from 'chai'
import factorial from '../src/factorial'

describe('factorial()', function() {

  it('should be a function', function() {
    expect(factorial).to.be.a('function')
  })

  it('returns the factorial of a number', function() {
    expect(factorial(5)).to.be.equal(120)
  })

  it('returns 1 for the factorial of 0', function() {
    expect(factorial(0)).to.be.equal(1)
  })
})
