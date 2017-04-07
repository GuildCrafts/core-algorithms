import { expect } from 'chai'
import isPalindrome from '../src/isPalindrome'

describe('isPalindrome()', function(){

  it('should be a function', function(){
    expect(isPalindrome).to.be.a('function')
  })
  it('returns an boolean', function(){
    expect(isPalindrome('radar')).to.be.boolean
  })
  expect(isPalindrome('radar')).to.be.equal(true)
})
