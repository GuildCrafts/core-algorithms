import { expect } from 'chai'
import setSymmetricDifference from '../src/setSymmetricDifference'

context('setSymmetricDifference()', () => {
    it(' compares two sets and returns the unique values from the first set.', () => {
      const aSet = [1, 2, 3]
      const bSet = [2, 3, 4]
      const results = setSymmetricDifference(aSet, bSet)

      expect(results)
        .to.deep.equal([1])
    })
  })
