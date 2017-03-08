import { expect } from 'chai';
import setCompliment from '../src/setCompliment';

describe('setCompliment()', ()=>{
  it('should be a function',()=>{
    expect(setCompliment).to.be.a('function');
  })

  it('should return correct set of array', ()=>{
    expect(setCompliment([1, 2, 3, 4],[2, 4, 6, 8])).to.deep.equal([6, 8]);
    expect(setCompliment([1, 2, 2, 2, 3, 3, 3, 3, 4],[2, 4, 4, 6, 6, 6, 8])).to.deep.equal([6, 8]);
  })

})
