import { expect } from 'chai';
import setUnion from '../src/setUnion';

describe('setUnion()', () => {

  it('should be a function', () => {
    expect(setUnion).to.be.a('function');    
  })

  it('ensure function throws error when array is not given as inputs', () => {
    expect(setUnion.bind(null, "Hello World", 123)).to.throw("error");
  })

  it('ensures setUnion works properly', () => {
    expect(setUnion([1,2], [3, 3, 3, 3, 3, 3, 4])).to.deep.equal([1,2,3,4]);
    expect(setUnion([1,2,3,4], [2,4,6,8])).to.deep.equal([1,2,3,4,6,8]);
  })
})
