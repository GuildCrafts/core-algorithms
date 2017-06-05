import { expect } from 'chai'
import setUnion from '../src/setUnion'

describe('setUnion()', function(){
  it('should be a function', function(){
    expect(setUnion).to.be.a('function')
  })
  it('returns the union of two sets', function(){
    expect(setUnion([2,5,6,8],[1,4,6,8])).to.deep.equal([ 1, 2, 4, 5, 6, 8 ])

    expect(setUnion([1, 2, 3, 4],[2, 4, 6, 8])).to.deep.equal([ 1, 2, 3, 4, 6, 8 ])
 })
})
