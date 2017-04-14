import { expect } from 'chai'
import isPalindrome from '../src/isPalindrome'

describe('isPalindrome()', function(){

  it('should be a function', function(){
    expect(isPalindrome).to.be.a('function')
  })

  it('Returns true if value given is a isPalindrome, false if not', () => {
    expect(isPalindrome('ana')).to.be.true

    expect(isPalindrome('beyonce')).to.be.false
  })

  it('Gets rid of punctiuation and white space to evaluate entire statement given', () => {
    expect(isPalindrome('A man, a plan, a canal: Panama')).to.be.true

    expect(isPalindrome('Hi my name is Ana!')).to.be.false
  })

  it('Only take strings', () => {
    expect(isPalindrome(300)).to.equal('This is not a string')

    expect(isPalindrome(null)).to.equal('This is not a string')
  })
})
