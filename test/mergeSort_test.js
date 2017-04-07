import { expect } from 'chai'
import mergeSort from '../src/mergeSort'

describe('mergeSort()', function () {

	it('should be a function', function() {
		expect(mergeSort).to.be.a('function')
	})

	it('should return error if input is not an array', function() {
		const array = 'str'
		expect(mergeSort(array)).to.be.equal('error')
	})

	it('should sort an array from largest to smallest', function() {
		const array = [10, 24, 43, 2, 1, 5, 23]
		expect(mergeSort(array)).to.be.deep.equal([1, 2, 5, 10, 23, 24, 43])
	})

})
