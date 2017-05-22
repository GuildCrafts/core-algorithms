import { expect } from 'chai'
import setSymmetricDifference from '../src/setSymmetricDifference'

describe('setSymmetricDifference()', function(){

  it('should be a function', function(){
    expect(setSymmetricDifference).to.be.a('function')
  })

  it('returns an object with all coin types (quarters, dimes, nickels, and pennies)', function(){
    const change = setSymmetricDifference({price: 100, amountGiven: 100})
    expect(change).to.be.an('object')
    expect(change).to.have.keys('quarters', 'dimes', 'nickels', 'pennies')
    expect(change).to.deep.equal({
      quarters: 0,
      dimes: 0,
      nickels: 0,
      pennies: 0,
    })
  })

  it('returns correct change', function(){
    expect(setSymmetricDifference({price: 100, amountGiven: 141})).to.deep.equal({
      quarters: 1,
      dimes: 1,
      nickels: 1,
      pennies: 1,
    })
  })

  it('minimizes the number of coins given by using the most high-value coins', function(){
    expect(setSymmetricDifference({price: 100, amountGiven: 168})).to.deep.equal({
      quarters: 2,
      dimes: 1,
      nickels: 1,
      pennies: 3,
    })

    expect(setSymmetricDifference({price: 100, amountGiven: 169})).to.deep.equal({
      quarters: 2,
      dimes: 1,
      nickels: 1,
      pennies: 4,
    })

    expect(setSymmetricDifference({price: 100, amountGiven: 170})).to.deep.equal({
      quarters: 2,
      dimes: 2,
      nickels: 0,
      pennies: 0,
    })
  })
})
