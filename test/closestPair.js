import {expect} from 'chai'
import closestPair from '../src/closestPair'

const points = [
  [2,1],
  [4,0],
  [-1,0],
  [5,3],
  [-2,5],
  [3,-3],
  [-2,0],
  [3,4],
  [5,-4],
  [0,-2]
]
describe('closestPair', function(){

  it('should return an object', function(){
    expect(closestPair(points)).to.deep.equal({ pair: [[-1, 0], [-2, 0]], distance: 1 })
  })
})
