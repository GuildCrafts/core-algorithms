import { expect } from 'chai'
import bubbleSort from '../src/bubbleSort'

describe('bubbleSort()', function(){

  it('should be a function', function(){
    expect(bubbleSort).to.be.a('function')
  })

  it('returns [1, 4, 10, 10, 28.76] when sorting [4, 10, 1, 28.76, 10]', function(){
    const sorted = bubbleSort([4, 10, 1, 28.76, 10])
    expect(sorted).to.be.deep.equal([1, 4, 10, 10, 28.76])
  })

  it('returns [1, 4, 10, 28.76] when sorting [1, 4.0, 10, 28.76]', function(){
    const sorted = bubbleSort([1, 4.0, 10, 28.76])
    expect(sorted).to.be.deep.equal([1, 4, 10, 28.76])
  })

  it('returns [1] when sorting [1]', function(){
    const sorted = bubbleSort([1])
    expect(sorted).to.be.deep.equal([1])
  })

  it('returns [] when sorting []', function(){
    const sorted = bubbleSort([])
    expect(sorted).to.be.deep.equal([])
  })

  it('returns undefined when sorting [4, 10, "1", 28.76, 10]', function(){
    const sorted = bubbleSort([4, 10, "1", 28.76, 10])
    expect(sorted).to.be.undefined
  })

  it('returns undefined when sorting "not an array"', function(){
    const sorted = bubbleSort("not an array")
    expect(sorted).to.be.undefined
  })

})
