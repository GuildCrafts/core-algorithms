import { expect } from "chai"
import setUnion from "../src/setUnion"

describe('setUnion', function() {

	it('should return union of two sets', function() {
		const a = [1, 2, 3, 4]
		const b = [2, 4, 6, 8]
		expect(setUnion(a, b)).to.deep.equal([1, 2, 3, 4, 6, 8])
	})

	it('should return b if a is null', function() {
		const b = null
		const a = [2, 4, 6, 8]
		expect(setUnion(a, b)).to.deep.equal([2, 4, 6, 8])
	})

	it('should return error if a and b are a stirng', function() {
		const a = 'str'
		const b = 'str'
		expect(setUnion(a, b)).to.equal('error')
	})
})
