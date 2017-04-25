import { expect } from 'chai'
import setIntersection from '../src/setIntersection'

describe('setIntersection', function(){

  it('should be a function', function() {
    expect(setIntersection).to.be.a('function')
  })

  it('returns the intersection of two sets', function () {
    expect(setIntersection([1, 2, 3, 4],[2, 4, 6, 8])).to.eql([2,4])
    expect(setIntersection([82,90,1], [1, 2, 90])).to.eql([1,90])
  })

  it('throws an error when given invalid inputs', function() {
    expect(function() {setIntersection('string')}).to.throw(
      'Invalid input format. Expected two arrays'
    )
  })
})
