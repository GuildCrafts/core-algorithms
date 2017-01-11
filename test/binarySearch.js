import { expect } from 'chai'
import binarySearch from '../src/binarySearch'

context('binarySearch()', () => {
  it('should be a function', function(){
    expect(binarySearch).to.be.function
  })

  it('returns the index of indicated item in the array.', () => {
    const arr = [1, 21, 32, 45, 100, 545, 10000]
    expect( binarySearch( arr, 45 ) )
      .to.equal(3)
  })
})
