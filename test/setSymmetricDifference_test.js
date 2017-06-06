import { expect } from 'chai'
import { setSymmetricDifference } from '../src/setSymmetricDifference'



describe('setSymmetricDifference', function() {

  it('should be a function', function() {
    expect(setSymmetricDifference).to.be.a('function')
  })

  it('returns the symmetric difference of two sets', function() {
    expect(setSymmetricDifference([1, 2, 3, 4], [2, 4, 6, 8])).to.eql([1, 3, 6, 8])
  })

  it('throws an error when given invalid inputs', function() {
    expect(function() {setSymmetricDifference('string', [1,2])}).
    to.throw('Invalid input format. Expected two arrays')
  })
})
