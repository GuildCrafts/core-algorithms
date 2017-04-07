import { expect } from 'chai';
import setIntersection from '../src/setIntersection';

describe('setIntersection()', () => {

  it('should be a function', () => {
    expect(setIntersection).to.be.a('function');
  })

  it('tests if function works correctly', () => {
    expect(setIntersection([1,1,1,1,1,1,2,3,4,4,4,4,4], [1,3])).to.deep.equal([1,3]);
    expect(setIntersection([1,1,1,1,1,1,2,3,4,4,4,4,4,5], [1,3,4,5])).to.deep.equal([1,3,4,5]);
    expect(setIntersection([1,2,3,4], [2,4,6,8])).to.deep.equal([2,4]);
  })

})
