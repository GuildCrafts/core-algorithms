import { expect } from 'chai'
import { isPalindrome } from '../src/isPalindrome'

describe('isPalindrome', function() {

  it('should be a function', function(){
    expect(isPalindrome).to.be.a('function')
  })

  it('returns true if it is a palindrome', function() {
    expect(isPalindrome('A man, a plan, a canal: Panama')).to.eql(true)
  })

  it('returns false if it is not a palindrome', function() {
    expect(isPalindrome('bananas')).to.eql(false)
  })
})
