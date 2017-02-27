let keys = {
  quarters: 0,
  dimes: 0,
  nickels: 0,
  pennies: 0
}
let takeQuarter = function(amounTGiven, pricey){
  amounTGiven = amounTGiven - 25
  keys.quarters++
  return amounTGiven
}
let takeDime = function(amounTGiven, pricey){
  amounTGiven = amounTGiven - 10
  keys.dimes++
  return amounTGiven
}
let takeNickel = function(amounTGiven, pricey){
  amounTGiven = amounTGiven - 5
  keys.nickels++
  return amounTGiven
}
let takePenny = function(amounTGiven, pricey){
  amounTGiven = amounTGiven - 1
  keys.pennies++
  return amounTGiven
}
export default function makeChange({price, amountGiven}) {
  let pricey = price
  let results = {}
  let amounTGiven = amountGiven
  if(price === amountGiven) {
    
    results.quarters = keys.quarters
    results.dimes = keys.dimes
    results.nickels = keys.nickels
    results.pennies = keys.pennies

    keys.quarters = 0
    keys.dimes = 0
    keys.nickels = 0
    keys.pennies = 0
    return results
  }
  if(amounTGiven - pricey >= 25){
    amounTGiven = takeQuarter(amounTGiven, keys)
    return makeChange({price: price, amountGiven: amounTGiven})
  }else{
    if(amounTGiven - pricey >= 10){
      amounTGiven = takeDime(amounTGiven, pricey)
      return makeChange({price: price, amountGiven: amounTGiven})
    }else{
      if(amounTGiven - pricey >= 5){
        amounTGiven = takeNickel(amounTGiven, pricey)
        return makeChange({price: price, amountGiven: amounTGiven})
      }else{
        if(amounTGiven - pricey >= 1){
          amounTGiven = takePenny(amounTGiven, pricey)
          return makeChange({price: price, amountGiven: mounTGiven})
        }
      }
    }
  }
}
