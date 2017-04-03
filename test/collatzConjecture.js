import { expect } from 'chai'
import collatzConjecture from '../src/collatzConjecture'

describe('collatzConjecture()', function() {

  it('should be a function', function() {
     expect(collatzConjecture).to.be.a('function')
  })

  it('returns 0 if the given number is 0', function() {
    expect(collatzConjecture(0)).to.be.an('array')
    expect(collatzConjecture(0)).to.deep.equal([0])
  })

  it('returns if the given number is 1', function() {
    expect(collatzConjecture(1)).to.be.an('array')
    expect(collatzConjecture(1)).to.deep.equal([1])
  })
  
  it('returns collatzConjecture sequence of a given number', function() {
    expect(collatzConjecture(3)).to.be.an('array')
    expect(collatzConjecture(3)).to.be.deep.equal([10, 5, 16, 8, 4, 2, 1])
  })
})
