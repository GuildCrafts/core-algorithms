import { expect } from 'chai'
import isPalindrome from '../src/isPalindrome'

describe( 'isPalindrome()', function(){

  it( 'should be a function', function(){
    expect( isPalindrome ).to.be.a( 'function' )
  })

  it( 'returns true if the input string is a palindrome', function(){
    expect( isPalindrome('raceCar')).to.be.true
  })
  it( 'returns true if the input string is a palindrome', function(){
    expect( isPalindrome('A man, a plan, a canal: Panama')).to.be.true
  })
  it( 'returns false if the input string is not a palindrome', function(){
    expect( isPalindrome('onomopia')).to.be.false
  })
})
