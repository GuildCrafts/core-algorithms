import { expect } from "chai"
import factorial from "../src/factorial"

 describe("factorial", function() {

 	it("should return 120 from 5", function() {
 		const output = factorial(5)
 		expect(output).to.equal(120)
 	})

 	it ("should return an error when trying a negative number", function() {
 		const output = factorial(-1)
 		expect(output).to.equal("error")
 	})

 	it("should return 5040 from 7", function() {
 		const output = factorial(7)
 		expect(output).to.equal(5040)
 	})

 })
