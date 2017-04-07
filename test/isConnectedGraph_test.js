import { expect } from 'chai';
import isConnectedGraph from '../src/isConnectedGraph';

describe('isConnectedGraph(graph)', () => {

  it('should be a function', () => {
    expect(isConnectedGraph).to.be.a('function');
  })
  it('should perform properly', ()=>{
    expect((isConnectedGraph({
       'a': ['b', 'c'],
       'b': ['a', 'd'],
       'c': ['a', 'd'],
       'd': ['b', 'c'],
     }))).to.equal(true);
     expect((isConnectedGraph({
       'a': ['b'],
       'b': ['a'],
       'c': ['d'],
       'd': ['c'],
     }))).to.equal(false);
  })

})
