import { expect } from 'chai'
import mergeSort from '../src/mergeSort'

context('mergeSort()', () => {
  it('should be a function', function(){
    expect(mergeSort).to.be.function
  })
  it('sorts the array from least to greatest.', () => {
    const a = [10, 2, 7, 5, 8, 3, 6, 1, 4, 9]
    const results = mergeSort(a)

    expect(results)
      .to.deep.equal([1, 2, 3, 4, 5, 6, 7, 8, 9, 10])
  })
})
