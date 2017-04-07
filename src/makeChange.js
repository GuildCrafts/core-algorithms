export default function makeChange({price, amountGiven}) {
  var change = amountGiven - price;
  var coins = {'quarters': 0, 'dimes': 0, 'nickels': 0, 'pennies': 0};
  while(change - 25 >= 0) {
  	coins.quarters++;
  	change -= 25;
  }
  while(change - 10 >= 0) {
  	coins.dimes++;
  	change -= 10;
  }
  while (change - 5 >= 0) {
  	coins.nickels++;
  	change -= 5;
  }
  while (change - 1 >= 0) {
  	coins.pennies++;
  	change -=1;
  }
  return coins;
}
