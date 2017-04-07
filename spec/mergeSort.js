import { expect } from 'chai'
import mergeSort from '../src/mergeSort'

describe('mergeSort', function(){
  context('when given an array', function(){
    it('should return a sorted array', function(){
      expect(mergeSort([9,6,1,7])).to.be([1,6,7,9])
      expect(mergeSort([9,-6,-1,7])).to.be([-6,-1,7,9])
    })
  })
  context('when given a string', function(){
    it('should return undefined', function(){
      expect(mergeSort('string')).to.be(undefined)
    })
  })
})
