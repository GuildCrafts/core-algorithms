'use strict'

export default function makeChange({price, amountGiven}) {

// make change Logic
  let quarters = 0;
  let dimes = 0;
  let nickels = 0;
  let pennies = 0;

var calculateChange = function(amountPaid) {
let change = amountPaid * 100;

  switch (true) {
  case (change >= 25):
    quarters += 1;
    let amountPaid1 = (change - 25) / 100;
  calculateChange(amountPaid1);
  break;
  case (change >= 10):
    dimes += 1;
    let amountPaid2 = (change - 10)/ 100;
  calculateChange(amountPaid2);
  break;
  case (change >= 5):
    nickels  += 1;
    let amountPaid3 = (change - 5)/ 100;
  calculateChange(amountPaid3);
  break;
  case (change >= 1):
    pennies  += 1;
    let amountPaid4 = (change - 1)/ 100;
  calculateChange(amountPaid4);
  break;
  default:
  console.log("quarters: " + quarters + " dimes: " + dimes + " nickels: " + nickels + " pennies: " + pennies);
  }
};



// Jrobs code poem
//function calculateChange( amount ) {
//   let normalized = Math.floor( ( amount || 0 ) * 100 )

//   let quarters = Math.floor( normalized / 25 )
//   normalized -= quarters * 25

//   let dimes = Math.floor( normalized / 10 )
//   normalized -= dimes * 10

//   let nickels = Math.floor( normalized / 5 )
//   normalized -= nickels * 5

//   let pennies = normalized

//   console.log("quarters: " + quarters + " dimes: " + dimes + " nickels: " + nickels + " pennies: " + pennies)
// }

// calculateChange( 0.08)
