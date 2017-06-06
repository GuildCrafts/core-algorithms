import { expect } from 'chai'
import setUnion from '../src/setUnion'

describe.only('setUnion()', function(){

  it('should be a function', function(){
    expect(setUnion).to.be.a('function')
  })

  it('returns an array', function(){
    expect(setUnion([1, 2, 3])).to.deep.equal([1, 2, 3])
  })

  it ('seeks one of a kind in the array', function(){
    expect(setUnion([1, 2, 3, 4, 2, 4, 6, 8,])).to.deep.equal([1, 2, 3, 4, 6, 8])
  })
  
})
