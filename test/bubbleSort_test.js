import { expect } from 'chai'
import bubbleSort from '../src/bubbleSort'

describe('bubbleSort()', function(){

  it('should be a function', function(){
    expect(bubbleSort).to.be.a('function')
  })

  it('sort an array of numbers using the bubble sort algorithm', function(){
    const arr = [34, 203, 3, 746, 200, 984, 198, 764, 9]
    const sortedArr = [ 3, 9, 34, 198, 200, 203, 746, 764, 984 ]
    expect(bubbleSort(arr)).to.eql(sortedArr)
  })
})
