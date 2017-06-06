import { expect } from 'chai'
import isPalindrome from '../src/isPalindrome'

describe('isPalindrome()', function(){

  it('should be a function', function(){
    expect(isPalindrome).to.be.a('function')
  })

  it('returns true if the input is a Palindrome', function(){
    expect(isPalindrome('racecar')).to.equal(true)
  })
  it('returns true if the input is a Palindrome', function(){
    expect(isPalindrome('trevor')).to.equal(false)
  })
  it('returns true if the input is a Palindrome', function(){
    expect(isPalindrome('A man, a plan, a canal: Panama')).to.equal(true)
  })

})
