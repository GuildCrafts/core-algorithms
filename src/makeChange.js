'use strict'

export default function makeChange({price, amountGiven}) {

  var looseChange = {
      quarters: 0,
      dimes: 0,
      nickels: 0,
      pennies: 0
    };

    var change = (amountGiven - price) * 100;
      console.log("Total Change $ " + change / 100);
    if(change < 0){
      console.log("not enough $$$");
    }

    if(change === 0 ){

      console.log("you get nothing");
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
    looseChange.pennies += pennies;
    console.log(pennies);
     console.log(looseChange);


    return looseChange;
}
