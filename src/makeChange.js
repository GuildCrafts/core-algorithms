export default function makeChange({price, amountGiven}) {
      // your code here
let coins = {quarters: 25, dimes: 10, nickels: 5, pennies: 1 }
let changeDue = amountGiven - price

    for(let key in coins) {
        let numberOfCoins = Math.floor(changeDue / coins[key])
        /*takes the changeDue divides it by coin section of quarters (25) resulting in a
        decimal of 1.64, then Math.floor round down to the nearest integer which is
        1 (<= the given number) and assigns it to the variable numberOfCoins.
          */
        changeDue -= coins[key] * numberOfCoins

        coins[key] = numberOfCoins

    }
    return coins;
}
