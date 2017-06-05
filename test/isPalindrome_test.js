import { expect } from 'chai'
import isPalindrome from '../src/isPalindrome'

describe ( 'isPalindrome()' , function() {
   it('should be a function', function() {
      expect(isPalindrome).to.be.a('function')
    })
   it('returns true or false to determine if a string is a palindrome', function(){
      expect(isPalindrome('radar')).to.deep.equal(true)

      expect(isPalindrome('bananas')).to.deep.equal(false)

      expect(isPalindrome('A man, a plan, a canal: Panama')).to.deep.equal(true)
      })
})
