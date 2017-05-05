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

  it('returns [1] when sorting [1]', function(){
    const sorted = mergeSort([1])
    expect(sorted).to.be.deep.equal([1])
  })

  it('returns [] when sorting []', function(){
    const sorted = mergeSort([])
    expect(sorted).to.be.deep.equal([])
  })

  it('returns undefined when sorting [4, 10, "1", 28.76, 10]', function(){
    const sorted = mergeSort([4, 10, "1", 28.76, 10])
    expect(sorted).to.be.undefined
  })

  it('returns undefined when sorting "not an array"', function(){
    const sorted = mergeSort("not an array")
    expect(sorted).to.be.undefined
  })

})
