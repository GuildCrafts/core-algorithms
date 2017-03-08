import { expect } from 'chai';
import mergeSort from '../src/mergeSort';

describe('mergeSort()', () => {

  it('should be a function', () => {
    expect(mergeSort).to.be.a('function');    
  })

  it('should sort properly', () => {
    expect(mergeSort([10, 2, 7, 5, 6, 5, 8, 3, 6, 1, 4, 4, 9])).to.deep.equal( [1, 2, 3, 4, 4, 5, 5, 6, 6, 7, 8, 9, 10 ]);
    expect(mergeSort([10, 2, 7, 5])).to.deep.equal([ 2, 5, 7, 10 ]);
  })

})


// /git commit -m "Finished algorithm problems; makeChange, FizzBuzz, isPalindrome, factorial, fibonacci, collatzConjecture, setUnion, setIntersection, setCompliment, setSymmetricDifference"
