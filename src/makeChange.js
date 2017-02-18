export default function makeChange(price, amountGiven) {
  const change = amountGiven - price
  if (price > amountGiven) {
    return "Not Enough Money"
    }
  else if (amountGiven >= price) {
    let q = Math.floor(change / 25)
    let qu = change - (q * 25)
    let d = Math.floor(qu / 10)
    let di = qu - (d * 10)
    let n = Math.floor(di / 5)
    let ni = di - (n * 5)
    let p = Math.floor(ni / 1)
    let coins = {quarters: q, dimes: d, nickels: n, pennies: p}
    return coins
  }
}
