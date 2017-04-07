import { expect } from 'chai'
import factorial from '../src/factorial'

describe('factorial()', () => {

  it('should be a function', function(){
    expect(factorial).to.be.a('function');
  })

  it('should be an integer', function(){
    expect(Math.floor(factorial(5)) === factorial(5)).to.equal(true);
  })

  it('should give correct factorial results', () => {
    expect(factorial(3)).to.equal(6);
    expect(factorial(5)).to.equal(120);
    expect(factorial(4)).to.equal(24);
    expect(factorial(0)).to.equal(1);
  })

})
