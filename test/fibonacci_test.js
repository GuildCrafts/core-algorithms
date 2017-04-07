import { expect, assert } from 'chai'
import fibonacci from '../src/fibonacci'

describe('fibonacci()', () => {

  it('should be a function', function(){
    expect(fibonacci).to.be.a('function');
  })

  it('should return an array', ()=>{
    expect(Array.isArray(fibonacci())).to.equal(true);
  })

  it('should have n terms', ()=>{
    expect(fibonacci(10).length).to.equal(10);
  })

  it('should return correct fibonacci array', ()=>{
    expect(fibonacci(10)).to.deep.equal([0, 1, 1, 2, 3, 5, 8, 13, 21, 34]);
    expect(fibonacci(2)).to.deep.equal([0, 1]);

  })

  it('returns error for nthTerm: -infinity to 0', () =>  {
    expect(fibonacci.bind(null, -1)).to.throw('error');
  })

})
