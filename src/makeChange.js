export default function makeChange({price, amountGiven}) {

  let exactChange = {
    quarters: 0,
    dimes: 0,
    nickels: 0,
    pennies: 0
  };
  let change = arguments[0].amountGiven - arguments[0].price;

  if(arguments[0].price > arguments[0].amountGiven){
    throw new Error("No change");
  }

  if (arguments[0].amountGiven === arguments[0].price) {
      return exactChange;
  }

  if (change >= 25){
    exactChange.quarters = Math.floor(change / 25);
    change = (change % 25);
  }

  if (change >= 10){
    exactChange.dimes = Math.floor(change / 10);
    change = (change % 10);
  }

  if (change >= 5){
    exactChange.nickels = Math.floor(change / 5);
    change = (change % 5);
  }

  if (change >= 1){
    exactChange.pennies = change;
    change = 0;
  }

  return exactChange;
}
