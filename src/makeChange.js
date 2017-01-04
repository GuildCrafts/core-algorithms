'use strict'

export default function makeChange({price, amountGiven}) {
  var looseChange = {
  quarters: 0,
  dimes: 0,
  nickels: 0,
  pennies: 0
  };

  var change = (amountGiven - price) * 100;

  if(change < 0){
  return "Not enough money";
  }

  var quarters = Math.floor(change / 25);
  looseChange.quarters += quarters;
  var remainder = change - quarters * 25;

  var dimes = Math.floor(remainder / 10);
  looseChange.dimes += dimes;
  remainder = remainder - dimes * 10

  var nickels = Math.floor(remainder / 5);
  looseChange.nickels += nickels;
  remainder = remainder - nickels * 5;

  var pennies = Math.floor(remainder);
  looseChange.pennies = pennies;

  return looseChange;
  }

  //in an object
  //takes a decimal value and makes change based on price
  //breaks it into denominations of quarters, nickels, dimes and pennies
  // will return a key value pair according to higher order value
