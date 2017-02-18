import { expect } from 'chai'
import fibonacci from '../src/fibonacci'

describe('fibonacci()', function(){

  it('should be a function', function() {
    expect(fibonacci).to.be.a('function')
  })

  it('should return the fibonacci sequence of a given number', function() {
    let a = fibonacci(3)
    expect(a).to.be.deep.equal([0, 1, 1, 2])
  })
})
