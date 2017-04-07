import { expect } from 'chai'
import binarySearch from '../src/binarySearch'

describe('binarySearch()' , function () {

	it('should return postion of a given number in an array', function() {
	 	const numbers = [5, 10, 15, 20, 25, 30, 35, 40, 45, 50]
	 	expect (binarySearch(numbers,45)).to.be.equal(8)

	})

	it('return an error if searched number is not an integer', function() {
	 	const numbers = [5, 10, 15, 20, 25, 30, 35, 40, 45, 50]
	 	expect (binarySearch(numbers,'hello')).to.be.equal('error')

	})

	it('should return error if array is not an object', function() {
	 	const numbers = 'numbers'
	 	expect (binarySearch(numbers,45)).to.be.equal('error')

	})

})
