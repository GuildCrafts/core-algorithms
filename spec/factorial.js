import { expect } from 'chai'
import factorial from '../src/factorial'

// describe the function
// what is suppose to do
// multiple test cases
// reference to chai library

describe('factorial', function(){
  context('when given a number', function(){
    it('should retrn factorial', function() {
      expect(factorial(5)).to.be(120)
    })
  })

  context('when given a negetive number', function(){
    it('should retrn an undefined', function(){
      expect(factorial(-5)).to.be(undefined)
    })
  })
})
