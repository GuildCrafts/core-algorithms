import { expect } from "chai"
import bubbleSort from "../src/bubbleSort"

describe ("bubbleSort", function() {

	it("should sort an array using the bubble sort algorithm", function(){
		const output = bubbleSort([10, 2, 7, 5, 3, 6, 1])
		expect(output).to.deep.equal([1, 2, 3, 5, 6, 7, 10])
	})

	it("should sort an array using the bubble sort algorithm", function(){
		const output = bubbleSort([10, 2, 7, 5, 8, 3, 6, 1, 4, 9])
		expect(output).to.deep.equal([1, 2, 3, 4, 5, 6, 7, 8, 9, 10])
	})

	it("should throw an error when given anything but an array", function(){
		const output = bubbleSort("str")
		expect(output).to.equal("error")
	})



})
