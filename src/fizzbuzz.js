export default function fizzBuzz(num) {
  for (let i = 0; i < num.length; i++) {
    if (num[i] % 15 === 0) {
      num[i] = 'FizzBuzz'
    }
    else if (num[i] % 5 === 0) {
      num[i] = 'Buzz'
    }
    else if (num[i] % 3 === 0) {
      num[i] = 'Fizz'
    }
  }
  return num 
} 