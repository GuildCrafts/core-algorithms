import { expect } from 'chai';
import closestPair from '../src/closestPair';

describe('closestPair()', ()=>{
  it('should be a function', ()=>{
    expect(closestPair).to.be.a('function');
  })
  it('should perform properly', ()=>{
    expect(closestPair([[2,1],[4,0],[-1,0],[5,3],[-2,5],[3,-3],[-2,0],[3,4],[5,-4],[0,-2]])).to.deep.equal({ pair: [ [ -1, 0 ], [ -2, 0 ] ], distance: 1 });
    expect(closestPair([[2,-548],[548,0],[1,0],[1,0],[-2,5],[3,-3],[-2,548],[48,4],[Infinity,-4],[0,-2]])).to.deep.equal({ pair: [ [ 1, 0 ], [ 1, 0 ] ], distance: 0 });
  })
})
