import { expect } from 'chai'
import isPalindrome from '../src/isPalindrome'

// describe the function
// what is suppose to do
// multiple test cases
// reference to chai library

describe('isPalindrome', function(){
  context('when given "radar"', function(){
    it('should return true', function(){
      expect(isPalindrome('radar')).to.be(true)
    })
  })
  context('when given "bananas"', function(){
    it('should return false', function(){
      expect(isPalindrome('bananas')).to.be(false)
    })
  })
  it('should ignore special characters', function(){
    expect(isPalindrome('radar')).to.be(true)
    expect(isPalindrome('rad%ar')).to.be(true)
    expect(isPalindrome('ra/dar')).to.be(true)
    expect(isPalindrome('ra/d.....ar')).to.be(true)
  })
  context('when given "A man, a plan, a canal: Panama"', function(){
    it('should return true', function(){
      expect(isPalindrome('A man, a plan, a canal: Panama')).to.be(true)
    })
  })
})
