import { expect } from 'chai';
import bubbleSort from '../src/bubbleSort';

describe('bubbleSort()', ()=>{
  it('should be a function', ()=>{
    expect(bubbleSort).to.be.a('function');
  })
  it('should perform properly', ()=>{
    expect(bubbleSort([10, 2, 7, 5, 8, 3, 6, 1, 4])).to.deep.equal([ 1, 2, 3, 4, 5, 6, 7, 8, 10 ]);
    expect(bubbleSort([10, 2, 7, 5, 8, 3, 6, 1, 4, 9])).to.deep.equal([ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 ]);
  })

})
