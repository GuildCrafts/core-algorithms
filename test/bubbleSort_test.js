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

  it('returns undefined when sorting [4, 10, "1", 28.76, 10]', function(){
    const sorted = bubbleSort([4, 10, "1", 28.76, 10])
    expect(sorted).to.be.undefined
  })

})
