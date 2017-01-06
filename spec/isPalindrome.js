import { expect } from 'chai'
import isPalindrome from '../src/isPalindrome'


describe('isPalindrome()', () => {
  'use strict'

  it('exists', () => {
    expect(isPalindrome).to.be.a('function')
  })
  it('should return true if string is a palindrome', () => {
    expect(isPalindrome('tacocat')).to.equal(true)
    expect(isPalindrome('radar')).to.equal(true)
    expect(isPalindrome('bananas')).to.equal(false)
  })
  it('should ignore special characters and spaces', () => {
    expect(isPalindrome('taco*(^&^&%cat')).to.equal(true)
  } )
})
