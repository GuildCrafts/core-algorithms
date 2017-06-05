import { expect } from 'chai'
import bubbleSort from '../src/bubbleSort'

describe('bubbleSort()', function(){
  it('should be a function', function(){
    expect(bubbleSort).to.be.a('function')
  })
  it('sorts an array of numbers using the bubble sort algorithm', function(){
    expect(bubbleSort([60, 10, 30, 50, 40, 20, 70])).to.deep.equal([ 10, 20, 30, 40, 50, 60, 70 ])

    expect(bubbleSort([10, 2, 7, 5, 8, 3, 6, 1, 4, 9])).to.deep.equal([ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 ])
 })
})
