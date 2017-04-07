export default function makeChange({price, amountGiven}) {
  let change = {quarters:0, dimes:0, nickels:0, pennies:0
  }

let remainder = amountGiven-price

if (remainder < 0 ){
  return 'not enough money'
}
let quarters = Math.floor(remainder/25);
change.quarters += quarters
remainder = remainder - (quarters*25)

let dimes = Math.floor(remainder/10);
change.dimes += dimes
remainder = remainder - (dimes*10)

let nickels = Math.floor(remainder/5);
change.nickels += nickels
remainder = remainder - (nickels*5)

let pennies = Math.floor(remainder)
change.pennies = remainder


return change

}
