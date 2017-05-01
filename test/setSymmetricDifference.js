import { expect } from 'chai'
import setSymmetricDifference from '../src/setSymmetricDifference'

describe('setSymmetricDifference()', function(){

  it('should be a function', function(){
    expect(setSymmetricDifference).to.be.a('function')
  })

  it('Return the symmetric difference of two sets.', function(){
    const firstSet = [1, 2, 3, 4]
    const secondSet = [2, 4, 6, 8]
    expect(setSymmetricDifference(firstSet, secondSet)).to.deep.equal([1, 3, 6, 8])
  })

  it('Return the symmetric difference of two sets.', function(){
    const firstSet = [3, 6, 9, 12]
    const secondSet = [6, 7, 8, 9]
    expect(setSymmetricDifference(firstSet, secondSet)).to.deep.equal([3, 12, 7, 8])
  })
})
