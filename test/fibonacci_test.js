import { expect } from 'chai'
import fibonacci from '../src/fibonacci'

describe('fibonacci()', function(){

  it('should be a function', function(){
    expect(fibonacci).to.be.a('function')
  })

  it('should return the fibonacci of a number to the nth position', function(){
    expect(fibonacci(5)).to.deep.equal([0, 1, 1, 2, 3])
  })
})
