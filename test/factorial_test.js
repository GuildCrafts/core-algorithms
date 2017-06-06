import { expect } from 'chai'
import factorial from '../src/factorial'

describe('factorial()', () => {

  it('should be a function', () => {
    expect(factorial).to.be.a('function')
  })

  it('returns the factorial of a number', () => {
    expect(factorial(7)).to.equal(5040)
    expect(factorial(4)).to.equal(24)
    expect(factorial(5)).to.equal(120)
  })

  it('only takes numbers', () => {
    expect(factorial('blah blah')).to.equal('value is not a number')
  })
})
