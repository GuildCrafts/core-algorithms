// collatzConjecture
//
// Return the Collatz sequence for a given number.
//
// The Collatz sequence for any positive integer n is defined as follows:
//
// If n is even, divide it by 2 to get n / 2. If n is odd, multiply it by 3 and add 1 to obtain 3n + 1. Repeat the process until you reach 1.
// collatzConjecture(1)
// // => [1]
//
// collatzConjecture(7)
// // => [7, 22, 11, 34, 17, 52, 26, 13, 40, 20, 10, 5, 16, 8, 4, 2, 1]


export default function collatzConjecture(num) {
  if (!Number.isInteger(num) || num < 0) {
    throw new Error('Invalid input format. Expected a positive integer')
  }
  let collatzArr = [num]
  let result = num

  while (result > 1) {
    if (result % 2 === 0) {
      result = result / 2
      collatzArr.push(result)
    } else {
      result = (result * 3) + 1
      collatzArr.push(result)
    }
  }
  return collatzArr
}
