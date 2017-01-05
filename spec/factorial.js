import { expect } from 'chai'
import factorial from '../src/factorial'

describe('factorial', () => {
'use strict'

  it('exists', () => {
    expect(factorial).to.be.a('function')
  })

  it('should take a number and return the factorial of that number', () => {
    expect(factorial(5)).to.equal(120)
    expect(factorial(3)).to.equal(6)
    expect(factorial(6)).to.equal(720)
  })
})
