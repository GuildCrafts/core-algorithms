import { expect, assert } from "chai"
import fizzBuzz from "../src/fizzBuzz"

describe("fizzBuzz()", function() {

  it("should return an array of numbers from 1 to 5", function(){
    const output = fizzBuzz(5)
    expect(output).to.deep.equal([1, 2, "Fizz", 4, "Buzz"])
  })

  it("should return an array of numbers from 1 to 15", function(){
    const output = fizzBuzz(15)
    expect(output).to.deep.equal([ 1, 2,
  'Fizz',
  4,
  'Buzz',
  'Fizz',
  7,
  8,
  'Fizz',
  'Buzz',
  11,
  'Fizz',
  13,
  14,
  'fizzBuzz' ])
  })

  it("should return error if input is invalid", function() {
    const output = fizzBuzz('potato')
    expect(output).to.equal('error')
  })
})
