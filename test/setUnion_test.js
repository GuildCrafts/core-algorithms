import { expect } from 'chai'
import setUnion from '../src/setUnion'

describe('setUnion', function(){

  it('should be a function', function() {
    expect(setUnion).to.be.a('function')
  })

  it('returns the union of two sets', function() {
    expect(setUnion([1,2,3,4],[2,4,6,8])).to.eql([1, 2, 3, 4, 6, 8])
    expect(setUnion([2,3,4,4], [1,2,3,4]).to.eqal([1,2,3,4])
  })

  it('throws an error when given invalid inputs', function() {
    expect(function() {setUnion('string')}).to.throw(
      'Invalid input format. Expected two arrays'
    )
  })
})
