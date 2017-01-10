import { expect } from 'chai'
import setUnion from '../src/setUnion'

context('setUnion()', () => {
    it('Joins two sets together without duplication.', () => {
      const aSet = new set([1, 2, 3])
      const bSet = new set([2, 3, 4])
      const results = aSet.setUnion( bSet )

      expect( aSet.union( bSet ).members() )
        .to.deep.equal([1, 2, 3, 4])
    })
  })
