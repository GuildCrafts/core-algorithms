// fizzBuzz
//
// Return an array of numbers from 1 to 100.
//
// For multiples of three, use the string Fizz instead of the number and for multiples of five replace with Buzz.
//
// For numbers which are multiples of both three and five replace with FizzBuzz.
//
// fizzBuzz()
// // => [1, 2, 'Fizz', 4, 'Buzz', 'Fizz', 7, 8, 'Fizz', 'Buzz', 11, 'Fizz', 13, 14, 'FizzBuzz', ...]

export default function fizzBuzz() {
  let fizzBuzzArray = []
  for (var i = 1; i <= 100; i++){
    if (i % 3 == 0 && i % 5 == 0) {
      fizzBuzzArray.push('FizzBuzz')
    } else if (i % 3 == 0) {
      fizzBuzzArray.push('Fizz')
    } else if (i % 5 == 0) {
      fizzBuzzArray.push('Buzz')
    } else {
      fizzBuzzArray.push(i)
    }
  }
  return fizzBuzzArray
}
