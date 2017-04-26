import { expect } from 'chai'
import setComplement from '../src/setComplement'

describe('setComplement', function(){

  it('should be a function', function() {
    expect(setComplement).to.be.a('function')
  })

  it('should show the items from set B that are not present in set A', function() {
    const setA = ['fluffy', 'cat', 'scratchy']
    const setB = ['scratchy', 'fluffy', 'dog']
    expect(setComplement(setA, setB)).to.eql(['dog'])
  })

  it('should show empty set if no items in B are not in A', function() {
    const setA = ['fluffy', 'cat', 'scratchy']
    const setB = ['scratchy', 'fluffy']
    expect(setComplement(setA, setB)).to.eql([])
  })

  it('throws an error when given invalid inputs', function() {
    expect(function() {setComplement({}, false)}).to.throw(
      'Invalid input format. Expected two arrays'
    )
  })
})
