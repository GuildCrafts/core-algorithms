import { expect } from 'chai'
import setIntersection from '../src/setIntersection'


context ('setIntersection()', () => {
  it('should be a function', function(){
    expect(setIntersection).to.be.function
  })
  it(' compares two sets and returns the values that are the same from the  sets.', () => {
    const aSet = [1, 2, 3 ]
    const bSet = [2, 3, 4 ]
    const results = setIntersection(aSet, bSet)

    expect(results).to.eql([2, 3])
  })
})
