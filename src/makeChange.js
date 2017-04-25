// makeChange:
//
// Given a price and an amount paid, return the number of coins in each denomination that should be given as change.
//
// Note: because JavaScript is bad at decimal math, the inputs are given as integers that represent dollar + cent amounts, so 139 = $1.39.
//
// makeChange({ price: 100, amountGiven: 100 })
// // => { quarters: 0, dimes: 0, nickels: 0, pennies: 0 }
//
// makeChange({ price: 159, amountGiven: 200 })
// // => { quarters: 1, dimes: 1, nickels: 1, pennies: 1 }
//
// makeChange({ price: 432, amountGiven: 500 })
// // => { quarters: 2, dimes: 1, nickels: 1, pennies: 3 }


export default function makeChange(options) {
  if (typeof options !== 'object') {
    throw new Error('Invalid input format. Expected an object literal')
  }
  const {price, amountGiven} = options
  let change = {
    quarters: 0,
    dimes: 0,
    nickels: 0,
    pennies: 0,
  }
  let result = amountGiven - price

  if (result === 0) {
    return change
  }
  while (result >= 25) {
    result = result - 25
    change.quarters += 1
  }
  while (result >= 10) {
    result = result - 10
    change.dimes += 1
  }
  while (result >= 5) {
    result = result - 5
    change.nickels += 1
  }
  while (result >= 1) {
    result = result - 1
    change.pennies += 1
  }
  return change
}
