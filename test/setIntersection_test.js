import { expect } from "chai"
import setIntersection from "../src/setIntersection"

describe('setIntersection()', function() {

  it('should be a function', function() {
    expect(setIntersection).to.be.a('function')
  })

  it('returns the intersection of two sets', function() {
    const a = [1, 2, 3, 4]
    const b = [2, 4, 6, 8]
    expect(setIntersection(a, b)).to.equal([2, 4])
  })
})
