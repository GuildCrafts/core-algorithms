import { expect } from 'chai';
import setSymmetricDifference from '../src/setSymmetricDifference';

describe('setSymmetricDifference()', ()=>{
  it('should be a function', ()=>{
    expect(setSymmetricDifference).to.be.a('function');
  })

  it('should return proper array', ()=>{
    expect(setSymmetricDifference([1, 2, 3, 4],[2, 4, 6, 8])).to.deep.equal([1, 3, 6, 8]);
    expect(setSymmetricDifference([1, 2, 3, 3, 3, 4],[2, 4, 6, 8])).to.deep.equal([1, 3, 6, 8]);
  })

})
