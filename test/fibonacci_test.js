import { expect } from "chai"
import fibonacci from "../src/fibonacci"

describe('fibonacci', function() {

	it.only('should return an array of numbers to the num postion', function() {
		const output = fibonacci(10)
		expect(output).to.deep.equal([0, 1, 1, 2, 3, 5, 8, 13, 21, 34])
	})

	it('should return an error if not a number', function() {
		const output = fibonacci('str')
		expect(output).to.equal(Error('NaN'))
	})

	it('should return zero if input is one', function() {
		const output = fibonacci(1)
		expect(output).to.deep.equal([0])
	})
})
