import { expect } from 'chai'
import fibonacci from '../src/fibonacci'

describe('fibonacci()', function(){

it('should be a function()', function() {
  expect((fibonacci).to.be.a('function')
})

//it('returns true when fibonacci = fibonacci', function(){
  //const Pali = fibonacci({price: 100, amountGiven: 100})
  //expect(change).to.be.an('object')
  })
})


describe.only('fibonacci', () => {

  it( 'Returns sum to 10()' => {
    expect( sumEvenFibs(10) ).to.equal( 44 )
  })
})
