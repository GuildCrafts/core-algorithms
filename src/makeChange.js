const makeChange = ({price, amountGiven}) => {
  let moneyBack = amountGiven - price
  if ( moneyBack === NaN ) {
    return 'no money given'
  }
  if ( moneyBack < 0 ) {
    return 'You need to give more money!!!'
  }

  let change = {
    quarters: 0,
    dimes: 0,
    nickels: 0,
    pennies: 0,
  }

  while ( moneyBack > 24 ) {
    change.quarters++
    moneyBack -= 25
  }

  while ( moneyBack > 9 ) {
    change.dimes++
    moneyBack -= 10
  }

  while ( moneyBack > 4 ) {
    change.nickels++
    moneyBack -= 5
  }

  while ( moneyBack > 0 ) {
    change.pennies++
    moneyBack -= 1
  }
  return change
}

export default makeChange
