  export default function makeChange({price, amountGiven}) {

  let changeNeeded = amountGiven - price,
      coinChange = {quarters: 0, dimes: 0, nickels: 0, pennies: 0}

  if (amountGiven < price) {
    return 'Gimme more money!'
  }

  while (changeNeeded >= 25) {
    coinChange.quarters++
    changeNeeded -= 25
  }

  while (changeNeeded >= 10) {
    coinChange.dimes++
    changeNeeded -= 10
  }

  while (changeNeeded >= 5) {
    coinChange.nickels++
    changeNeeded -= 5
  }

  while (changeNeeded >= 1) {
    coinChange.pennies++
    changeNeeded -= 1
  }
  return coinChange
}
