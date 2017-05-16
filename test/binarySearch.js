import { expect } from 'chai'
import binarySearch from '../src/binarySearch'

describe('binarySearch(array)', () => {
  it('is a function', () => {
    expect(binarySearch).to.be.a('function')
  })
  it('searches for a number within an array and returns its index', () => {
    const numbers = [5, 10, 15, 20, 25, 30, 35, 40, 45, 50]
    expect(binarySearch(numbers, 45)).to.eql(8)
  })
  it('returns -1 if number is not in the array', () => {
    const numbers = [5, 10, 15, 20, 25, 30, 35, 40, 45, 50]
    expect(binarySearch(numbers, 100)).to.eql(-1)
  })
})
