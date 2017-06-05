export default function makeChange({price, amountGiven}) {
  var change = {
    "quarters": 0,
    "dimes": 0,
    "nickels": 0,
    "pennies": 0,
  };

  var difference = amountGiven - price;

  if (difference <= 0){
    return change;
  } else {
    quarters(difference);
  };

  function quarters(difference){
    var quarterTotal = Math.floor(difference/25);
    difference -= (quarterTotal * 25);
    change.quarters = quarterTotal;
    dime(difference);
};

  function dime(difference){
    var dimeTotal = Math.floor(difference/10);
    difference -= (dimeTotal * 10);
    change.dimes = dimeTotal;
    nickel(difference);
};

  function nickel(difference) {
     var nickelTotal = Math.floor(difference/5);
     difference -= (nickelTotal * 5);
     change.nickels = nickelTotal;
     penny(difference);
   };

  function penny(difference){
     var pennyTotal = Math.floor(difference/1);
     difference -= (pennyTotal * 1);
     change.pennies = pennyTotal;
   };

  return change;
};


module.exports = makeChange
