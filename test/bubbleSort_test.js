import { expect } from 'chai'
import bubbleSort from '../src/bubbleSort'

describe('bubbleSort()', function() {

  it('should be a function', function() {
     expect(bubbleSort).to.be.a('function')
  })

  it('returns an array of numbers from min to max', function() {
    const numbers = [1, 3, 4, 10, 24, 2, 5, 11]
    const a = bubbleSort(numbers)
    expect(numbers).to.be.an('array')
    expect(a).to.be.deep.equal([1, 2, 3, 4, 5, 10, 11, 24])
  })

  it('returns min', function() {
    const numbers = [1, 3, 4, 10, 24, 2, 5, 11]
    const a = bubbleSort(numbers)
    expect(numbers).to.be.an('array')
    expect(a).to.be.deep.equal([1, 2, 3, 4, 5, 10, 11, 24])
  })
})
