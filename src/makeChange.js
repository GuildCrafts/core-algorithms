export default function makeChange(price, amountGiven) {
	let change = amountGiven - price, coins = {}
	coins.quarters = Math.floor(change / 25)
		change -= (coins.quarters * 25)
	coins.dimes = Math.floor(change / 10)
		change -= (coins.dimes * 10)
	coins.nickels = Math.floor(change / 5)
		change -= (coins.nickels * 5)
	coins.pennies = Math.floor(change / 1)
		change -= (coins.pennies * 1)
	return coins
}
