export default function factorial(input) {

  let multiplyNumbers = []

  for (let i = input; i > 1; i--) {
    multiplyNumbers.push(i)
  }
  return multiplyNumbers.reduce(function(a, b) {return a * b})
}
