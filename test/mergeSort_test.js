import { expect } from 'chai'
import mergeSort from '../src/mergeSort'

describe('mergeSort()', function() {

  it('should be a function', function() {
    expect(mergeSort).to.be.a('function')
  })

  it('return an array of numbers from min to max', function() {
    const numbers = [5, 1, 3, 2, 7, 4, 6]
    let a = mergeSort(numbers)
    return a
    expect(a).to.equal([1, 2, 3, 4, 5, 6, 7])
  })
})
