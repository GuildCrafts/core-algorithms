export default function makeChange({price, amountGiven}) {
  const change = {
    quarters: 0,
    dimes: 0,
    nickels: 0,
    pennies: 0
  }
  const totalChange = amountGiven - price;
  var difference = amountGiven - price;
    if(difference > 24){
      change.quarters = Math.floor(difference/25);
      difference = difference - 25*change.quarters;
    }
    if(difference > 9){
      change.dimes = Math.floor(difference/10);
      difference = difference - 10*change.dimes;
    }
    if(difference > 4){
      change.nickels = Math.floor(difference/5);
      difference = difference - 5*change.nickels;
    }
    change.pennies = difference;
  return change;
}
