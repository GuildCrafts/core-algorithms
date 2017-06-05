import { expect } from 'chai'
import binarySearch from '../src/binarySearch'

describe('binarySearch()', function(){
  it('should be a function', function(){
    expect(binarySearch).to.be.a('function')
  })
  it('should return an index from the array', function(){
    const array = [5, 10, 15, 20, 25, 30, 35, 40, 45, 50]
    expect(binarySearch(array, 45)).to.deep.equal(8)

    expect(binarySearch(array, 5)).to.deep.equal(0)
 })
})
