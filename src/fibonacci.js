// fibonacci
//
// Return an array of Fibonacci numbers to the nth position.
//
// fibonacci(10)
// // => [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]

export default function fibonacci(num) {
  if (typeof num !== 'number') {
    throw new Error('Invalid input format. Expected a number')
  }
  var first = 0
  var second = 1
  var result
  var fibonacciArr = [0]

  for (var i = 1; i < num; i++) {
    result = first + second
    first = second
    second = result
    fibonacciArr.push(first)
  }
  return fibonacciArr
}
