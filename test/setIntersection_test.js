import { expect } from 'chai'
import setIntersection from '../src/setIntersection'

describe('setIntersection()', function(){
  it('should be a function', function(){
    expect(setIntersection).to.be.a('function')
  })
  it('returns the intersection of two sets', function(){
    expect(setIntersection([2,5,6,8],[1,4,6,8])).to.deep.equal([ 6, 8 ])

    expect(setIntersection([1, 2, 3, 4],[2, 4, 6, 8])).to.deep.equal([ 2, 4 ])
 })
})
