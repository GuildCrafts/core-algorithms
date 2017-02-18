import { expect } from 'chai'
import setComplement from '../src/setComplement'

describe('setComplement()', function() {

  it('should be a function', function(){
    expect(setComplement).to.be.a('function')
  })

  it('should return the complement of two sets', function(){
    const a = [1, 2, 3, 4]
    const b = [2, 4, 6, 8]
    let c = setComplement(a, b)
    expect(c).to.be.equal([6, 8])
  })
})
