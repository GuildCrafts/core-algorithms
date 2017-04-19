import { expect } from 'chai'
import fibonacci from '../src/fibonacci'

describe( 'fibonacci()', function(){

  it( 'should be a function', function(){
    expect( fibonacci ).to.be.a( 'function' )
  })

  it( 'Returns an array of Fibonacci numbers to the _nth_ position.', function(){
    expect( fibonacci(10)).to.eql([0, 1, 1, 2, 3, 5, 8, 13, 21, 34])
  })
  it( 'Returns an array of Fibonacci numbers to the _nth_ position.', function(){
    expect( fibonacci(15)).to.eql([0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, 233, 377])
  })
  it( 'Returns an array of Fibonacci numbers to the _nth_ position.', function(){
    expect( fibonacci('I want to be a number')).to.equal('Your not a number')
  })
})
