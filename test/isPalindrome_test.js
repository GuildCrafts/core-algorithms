import { expect } from 'chai'
import isPalindrome from '../src/isPalindrome'

describe('isPalindrome()', () => {

  it('should be a function', function(){
    expect(isPalindrome).to.be.a('function')
  })

  it('checks to see if result is indeed false', ()=>{
    expect(isPalindrome("HELLO WORLD")).to.be.false;
  })

  it('checks to see if result is indeed true', ()=>{
    expect(isPalindrome("r a d a r @#(%*&)")).to.be.true;
    expect(isPalindrome("abcdeedcba")).to.be.true;
  })

})
