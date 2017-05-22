// Return an array of numbers from 1 to 100.
//
// For multiples of three, use the string `Fizz` instead of the number and for multiples of five replace with `Buzz`.
//
// For numbers which are multiples of both three and five replace with `FizzBuzz`.

export default function fizzBuzz() {
  function whichFizzBuzz(number){
    let result = ''
    if (number % 3 === 0){
      result += 'Fizz'
    }
    if (number % 5 === 0){
      result += 'Buzz'
    }
    if (number % 3 * number % 5 > 0){
      result = number
    }
    return result
  }
  result = Array.apply(null, {length: 100}).map(Number.call, Number)
  return result.map(function(number) {
   return whichFizzBuzz(number+1)})
}
