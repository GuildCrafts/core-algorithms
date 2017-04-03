import { expect } from 'chai'
import setComplement from '../src/setComplement'

describe('setComplement()', function() {

  it('should be a function', function() {
    expect(setComplement).to.be.a('function')
  })

  it('returns one set if one set is given', function() {
    const a = [1, 2, 3, 4]
    expect(setComplement(a)).to.be.deep.equal([1, 2, 3, 4])
  })

  it('should return the complement of two sets', function() {
    const a = [1, 2, 3, 4]
    const b = [2, 4, 6, 8]
    expect(setComplement(a, b)).to.be.deep.equal([6, 8])
  })
})
