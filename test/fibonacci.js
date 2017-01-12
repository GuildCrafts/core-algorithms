import { expect } from 'chai'
import fibonacci from '../src/fibonacci'

describe('fibonacci()', function(){

  it('should be a function', function(){
    expect(fibonacci).to.be.function
  })
  it('returns an array', function(){
    expect(fibonacci(5)).to.be.array

  })
  it('returns a fibonacci sequence', function(){
    expect(fibonacci(5)).to.deep.equal([ 0, 1, 1, 2, 3, 5 ])

  })
})
