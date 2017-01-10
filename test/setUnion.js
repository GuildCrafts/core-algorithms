import { expect } from 'chai'
import setUnion from '../src/setUnion'

context.only('setUnion()', () => {
    it('Joins two sets together without duplication.', () => {
      const aSet = [1, 2, 3]
      const bSet = [2, 3, 4]
      // const results = setUnion( bSet )

      expect( setUnion( aSet, bSet ) )
        .to.deep.equal([1, 2, 3, 4])
    })
  })
