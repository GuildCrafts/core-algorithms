// fibonacci
//
// Return an array of Fibonacci numbers to the nth position.
//
// fibonacci(10)
// // => [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]

let fibonacci = num => {
  if (typeof num !== 'number') {
    throw new Error('Invalid input format. Expected a number')
  }
  let first = 0
  let second = 1
  let result
  let fibonacciArr = [0]

  for (let i = 1; i < num; i++) {
    result = first + second
    first = second
    second = result
    fibonacciArr.push(first)
  }
  return fibonacciArr
}

module.exports = { fibonacci }
