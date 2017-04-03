import { expect } from 'chai'
import fibonacci from '../src/fibonacci'

describe('fibonacci()', function() {

  it('should be a function', function() {
    expect(fibonacci).to.be.a('function')
  })
  
  it('returns the fibonacci sequence of a given number', function() {
    expect(fibonacci(4)).to.be.an('array')
    expect(fibonacci(4)).to.be.deep.equal([0, 1, 1, 2, 3])
  })
})
