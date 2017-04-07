import { expect } from 'chai'
import setCompliment from '../src/setCompliment'

describe('setCompliment()', function() {

	it('should return the compliment', function() {
		const a = [1, 2, 3, 4]
		const b = [2, 4, 6, 8]
		expect(setCompliment(a, b)).to.be.deep.equal([6,8])
	})

	it('should return an error if lengths are not even', function() {
		const a = [1, 2, 3, 4]
		const b = [2, 4, 6, 8, 9, 10]
		expect(setCompliment(a, b)).to.be.deep.equal('not the same length')
	})

	it('should return an error if input is not an object', function() {
		const a = 'string'
		const b = []
		expect(setCompliment(a, b)).to.be.equal('error')
	})
})
