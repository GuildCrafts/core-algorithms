import { expect } from 'chai'
import mergeSort from '../src/mergeSort'

describe('mergeSort()', function(){

  it('should be a function', function(){
    expect(mergeSort).to.be.a('function')
  })

  it('returns [1, 4, 10, 10, 28.76] when sorting [4, 10, 1, 28.76, 10]', function(){
    const sorted = mergeSort([4, 10, 1, 28.76, 10])
    expect(sorted).to.be.deep.equal([1, 4, 10, 10, 28.76])
  })

  it('returns [1, 4, 10, 28.76] when sorting [1, 4.0, 10, 28.76]', function(){
    const sorted = mergeSort([1, 4.0, 10, 28.76])
    expect(sorted).to.be.deep.equal([1, 4, 10, 28.76])
  })

  it('returns undefined when sorting [4, 10, "1", 28.76, 10]', function(){
    const sorted = mergeSort([4, 10, "1", 28.76, 10])
    expect(sorted).to.be.undefined
  })

})
