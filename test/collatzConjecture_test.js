import { expect } from 'chai'
import collatzConjecture from "../src/collatzConjecture"

describe('collatzConjecture()', ()=>{

  it('collatzConjecture() should be a function', ()=>{
    expect(collatzConjecture).to.be.a('function');
  })

  it('should return "Error" if n is 0', ()=>{
    expect(collatzConjecture.bind(null, 0)).to.throw('error');
  })

  it('should return correct array output', ()=>{
    expect(collatzConjecture(1)).to.deep.equal([1]);
    expect(collatzConjecture(7)).to.deep.equal([7, 22, 11, 34, 17, 52, 26, 13, 40, 20, 10, 5, 16, 8, 4, 2, 1]);
  })

})
