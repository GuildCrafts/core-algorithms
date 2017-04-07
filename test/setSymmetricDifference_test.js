import { expect } from 'chai'
import setSymmetricDifference from '../src/setSymmetricDifference'

describe('setSymmetricDifference()', function() {

	it('should take the difference between both arrays', function() {
		const a = [1, 2, 3, 4]
		const b = [2, 4, 6, 8]
		expect(setSymmetricDifference(a,b)).to.be.deep.equal([1,3,6,8])
	})

	it('should return difference of arrays with different length', function() {
		const a = [1, 2, 3, 4]
		const b = [2, 4, 6, 8, 3, 10]
		expect(setSymmetricDifference(a,b)).to.be.deep.equal([1,6,8,10])
	})

	it('should return error if an input is not an array', function() {
		const b = 'str'
		const a = [2, 4, 6, 8]
		expect(setSymmetricDifference(a,b)).to.equal('error')
	})

})
