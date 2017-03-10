import { expect } from 'chai';
import binarySearch from '../src/binarySearch';

describe('binarySearch(array, choice)', () => {

  it('should be a function', () => {
    expect(binarySearch).to.be.a("function");
  })

  it('should work on the given problem set', () => {
    expect(binarySearch([5, 10, 15, 20, 25, 30, 35, 40, 45, 50], 45)).to.equal(8);
    expect(binarySearch([5, 10, 15, 99, 23, 11, 20, 25, 30, 35, 40, 45, 50], 5)).to.equal(0);
  })

})
