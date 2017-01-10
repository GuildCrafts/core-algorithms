import { expect } from 'chai'
import setIntersection from '../src/setIntersection'


context ('setIntersection()', () => {
      it(' compares two sets and returns the values that are the same from the  sets.', () => {
        const aSet = new set([1, 2, 3])
        const bSet = new set([2, 3, 4])
        const results = aSet.setIntersection(aSet, bSet)

        expect(results)
          .to.deep.equal([2, 3])
      })
  })
