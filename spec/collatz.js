'use strict'
import { expect } from 'chai'
import collatz from '../src/collatz'

describe('collatz', () => {

  it('exists', () => {
    expect(collatz).to.be.a('function')
  })
  // it('should return an array', () => {
  //   expect(collatz(1)).to.equal([1])
  // })
  it('should take a number and return the collatz conjecture', () => {
    expect(collatz(1)).to.eql([1])
    expect(collatz(7)).to.eql([7, 22, 11, 34, 17, 52, 26, 13, 40, 20, 10, 5, 16, 8, 4, 2, 1])
  })
})
