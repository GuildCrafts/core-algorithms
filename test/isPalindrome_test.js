import { expect } from 'chai'
import isPalindrome from '../src/isPalindrome'


describe('isPalindrome()', function() {


  it('should be a function', function() {
    expect(isPalindrome).to.be.a('function')
  })

  it('should return true if string is a palindrome', function() {

    expect(isPalindrome('racecar')).to.be.equal(true)
  })

  it('should return false if string is not a palindrome', function() {
    expect(isPalindrome('hello')).to.be.equal(false)

  })
})
