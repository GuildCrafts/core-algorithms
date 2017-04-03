import { expect } from 'chai'
import setUnion from '../src/setUnion'

describe('setUnion()', function() {

  it('should be a function', function() {
    expect(setUnion).to.be.a('function')
  })

  it('returns the union of two sets with the same number', function() {
    const a = [1, 2, 3, 4]
    const b = [2, 4, 6, 8]
    expect(setUnion(a, b)).to.be.deep.equal([1, 2, 3, 4, 6, 8])
  })
})
