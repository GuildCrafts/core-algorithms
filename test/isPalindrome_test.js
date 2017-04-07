import { expect } from "chai"
import isPalindrome from "../src/isPalindrome.js"

describe('isPalindrome', function () {

	it('should be true if string is the same in reverse', function() {
		const output = isPalindrome('radar')
		expect(output).to.equal(true)
	})
	it('should be false if string is not the same in reverse', function() {
		const output = isPalindrome('hello')
		expect(output).to.equal(false)
	})
	it('should be true if string has spacing and punctuation', function() {
		const output = isPalindrome('race,:.car')
		expect(output).to.equal(true)
	})
})
