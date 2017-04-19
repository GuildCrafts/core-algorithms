function makeChange({price, amountGiven}) {
  var changeHolder = {
    'quarters': 0,
    'dimes': 0,
    'nickels': 0,
    'pennies': 0
  }
var difference = amountGiven - price

while ( difference !== 0 ) {
  if ( difference >= 25 ) {
    changeHolder.quarters++
    difference = difference - 25
  } else if ( difference >= 10 ) {
    changeHolder.dimes++
    difference = difference - 10
  } else if ( difference >= 5 ) {
    changeHolder.nickels++
    difference = difference - 5
  } else {
    changeHolder.pennies++
    difference = difference - 1
  }
}
return changeHolder
}

module.exports = makeChange
