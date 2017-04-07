import { expect } from "chai"
import collatzConjecture from "../src/collatzConjecture"

describe("collatzConjecture", function() {

	it("should only return an array with 1 inside", function() {
		const output = collatzConjecture(1)
		expect(output).to.deep.equal([1])
	})

	it("should return an array of numbers", function() {
		const output = collatzConjecture(7)
		expect(output).to.deep.equal([7, 22, 11, 34, 17, 52, 26, 13, 40, 20, 10, 5, 16, 8, 4, 2, 1])
	})

	it("should return an error with invalid input", function() {
		const output = collatzConjecture("str")
		expect(output).to.deep.equal(Error('Input is not a number'))
	})
})
