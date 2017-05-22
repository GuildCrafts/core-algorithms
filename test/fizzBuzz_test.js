import { expect } from 'chai'
import fizzBuzz from '../src/fizzBuzz'

describe('fizzBuzz()', function(){

  it('should be a function', function(){
    expect(fizzBuzz).to.be.a('function')
  })

  result = fizzBuzz()
  it('Expect 3rd element to be Fizz)',
    expect(result[3]).to.equal('Fizz')
  })

  it('Expect 5th element to be Buzz)',
    expect(result[5]).to.equal('Buzz')
  })

  it('Expect 15th element to be FizzBuzz)',
    expect(result[15]).to.equal('FizzBuzz')
  })

  it('Expect length to be 100)',
    expect(result.length).to.equal(100)
  })
})
