import { expect } from "chai"
import setIntersection from "../src/setIntersection"

describe('setIntersection', function() {

	it("should return an array that contains the numbers in common between two sets", function(){
		const a = [1, 2, 3, 4]
		const b = [2, 4, 6, 8]
		expect(setIntersection(a, b)).to.deep.equal([2, 4])
	})

	it("should return 'there are no numbers in common'", function() {
		const a = [1, 2, 3, 4]
		const b = [5, 6, 7, 8, 9, 10]
		expect(setIntersection(a, b)).to.equal("There are no numbers in common")
	})

	it ("should return an error", function(){
		const a = []
		const b = "str"
		expect(setIntersection(a, b)).to.equal("error")
	})

})