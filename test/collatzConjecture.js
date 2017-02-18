import { expect } from 'chai'
import collatzConjecture from '../src/collatzConjecture'

describe('collatzConjecture()', function(){

  it('should be a function', function(){
     expect(collatzConjecture).to.be.a('function')
  })

  it('returns 0 if the given number is 0', function(){
    let a = collatzConjecture(0)
    expect(a).to.be.an('array')
    expect(a).to.deep.equal([0])
  })

  it('returns 1 if the given number is 1', function(){
    let a = collatzConjecture(1)
    expect(a).to.be.an('array')
    expect(a).to.deep.equal([1])
  })

  it('returns the collatzConjecture sequence of a given number', function(){
    let a = collatzConjecture(3)
    expect(a).to.be.an('array')
    expect(a).to.be.equal([10, 5, 16, 8, 4, 2, 1])
  })
})
