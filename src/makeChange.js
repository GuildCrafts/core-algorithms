export default function makeChange(price, amountGiven) {
  let change = {
    quarters: 0,
    dimes: 0,
    nickels: 0,
    pennies: 0,
  }

  if(price === amountGiven) {
    return change
  }

  let diff = amountGiven - price

  while(diff != 0) {
    if(diff >= 25) {
      diff -= 25
      change.quarters += 1
    } else if(diff >= 10) {
      diff -= 10
      change.dimes += 1
    } else if(diff >= 5) {
      diff -= 5
      change.nickels += 1
    } else if(diff >= 1){
      diff -= 1
      change.pennies += 1
    }
  }
  return change
}
