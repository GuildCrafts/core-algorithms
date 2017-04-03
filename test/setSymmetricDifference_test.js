import { expect } from 'chai'
import setSymmetricDifference from '../src/setSymmetricDifference'

describe('setSymmetricDifference()', function() {

  it('should be a function', function() {
    expect(setSymmetricDifference).to.be.a('function')
  })

  it('returns only one set if another set is missing', function() {
    const a = [1, 2, 3, 4]
    expect(setSymmetricDifference(a)).to.be.deep.equal([1, 2, 3, 4])
  })

  it('returns the symmetric difference of two sets', function() {
    const a = [1, 2, 3, 4]
    const b = [2, 4, 6, 8]
    expect(setSymmetricDifference(a, b)).to.be.deep.equal([1, 3, 6, 8])
  })
})
