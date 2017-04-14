export default function fizzBuzz(value) {
  const returnArray = []
  for (let i = 1;  i <= value; i++) {
    let fizzBuzzyValue = ''

    if(i % 3 === 0) {
      fizzBuzzyValue = fizzBuzzyValue.concat('Fizz')
    }
    if(i % 5 === 0) {
      fizzBuzzyValue = fizzBuzzyValue.concat('Buzz')
    }
    if(fizzBuzzyValue === '') {
      fizzBuzzyValue = i
    }
    returnArray.push(fizzBuzzyValue)
  }

  return returnArray
}
