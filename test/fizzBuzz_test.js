import { expect } from 'chai'
import fizzBuzz from '../src/fizzBuzz'

describe('fizzBuzz()', function(){
  it('should be a function', function(){
    expect(fizzBuzz).to.be.a('function')
  })
  var arrayResults = [1, 2, 'Fizz', 4, 'Buzz', 'Fizz', 7, 8, 'Fizz', 'Buzz', 11, 'Fizz', 13, 14, 'FizzBuzz', 16, 17, 'Fizz', 19, 'Buzz', 'Fizz', 22, 23, 'Fizz', 'Buzz', 26, 'Fizz', 28, 29, 'FizzBuzz', 31, 32, 'Fizz', 34, 'Buzz', 'Fizz', 37, 38, 'Fizz', 'Buzz', 41, 'Fizz', 43, 44, 'FizzBuzz', 46, 47, 'Fizz', 49, 'Buzz', 'Fizz', 52, 53, 'Fizz', 'Buzz', 56, 'Fizz', 58, 59, 'FizzBuzz', 61, 62, 'Fizz', 64, 'Buzz', 'Fizz', 67, 68, 'Fizz', 'Buzz', 71, 'Fizz', 73, 74, 'FizzBuzz', 76, 77, 'Fizz', 79, 'Buzz', 'Fizz', 82, 83, 'Fizz', 'Buzz', 86, 'Fizz', 88, 89, 'FizzBuzz', 91, 92, 'Fizz', 94, 'Buzz', 'Fizz', 97, 98, 'Fizz', 'Buzz']

  it('returns an array of 1 to 100', function(){
    expect(fizzBuzz()).to.deep.equal(arrayResults)
  })

  it('returns Fizz at numbers divisble by three', function(){
    var atIndexTwo = arrayResults[2]
    var atIndexFive = arrayResults[5]
    var atIndexEight = arrayResults[8]

    expect(atIndexTwo).to.deep.equal('Fizz')
    expect(atIndexFive).to.deep.equal('Fizz')
    expect(atIndexEight).to.deep.equal('Fizz')
  })

  it('returns Buzz at numbers divisble by five', function(){
    var atIndexFour = arrayResults[4]
    var atIndexNine = arrayResults[9]

    expect(atIndexFour).to.deep.equal('Buzz')
    expect(atIndexNine).to.deep.equal('Buzz')
  })

  it('returns Buzz at numbers divisble by three and five', function(){
    var atIndexFourteen = arrayResults[14]
    var atIndexTwentyNine = arrayResults[29]
    var atIndexFortyFour = arrayResults[44]

    expect(atIndexFourteen).to.deep.equal('FizzBuzz')
    expect(atIndexTwentyNine).to.deep.equal('FizzBuzz')
    expect(atIndexFortyFour).to.deep.equal('FizzBuzz')
  })
})
