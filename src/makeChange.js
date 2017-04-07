'use strict'

export default function makeChange({price, amountGiven}) {

  let amount = amountGiven - price;

  let normalized = amount

  let quarters = Math.floor(normalized / 25)
  normalized -= quarters * 25

  let dimes = Math.floor(normalized / 10)
  normalized -= dimes * 10

  let nickels = Math.floor(normalized / 5)
  normalized -= nickels * 5

  let pennies = normalized

  return {
    quarters: quarters, dimes: dimes, nickels: nickels, pennies: pennies
  }

}
