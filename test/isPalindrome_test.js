import { expect } from 'chai'
import isPalindrome from '../src/isPalindrome'

describe('isPalindrome', function() {

  it('should be a function', function() {
    expect(isPalindrome).to.be.a('function')
  })

  it('should return true if string is a palindrome', function() {
    let a = isPalindrome('race car')
    expect(a).to.be.a('true')
  })

  it('should return false if string is not a palindrome', function() {
    let b = isPalindrome('hello')
    expect(b).to.be.a('false')
  })
})
