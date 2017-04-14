export default function fizzBuzz(value) {
  const returnArray = []
  for (let index = 1;  index <= value; index++) {
    let fizzBuzzyValue = ''

    if(i % 3 === 0) {
      fizzBuzzyValue = fizzBuzzyValue.concat('Fizz')
    }
    if(i % 5 === 0) {
      fizzBuzzyValue = fizzBuzzyValue.concat('Buzz')
    }
    if(fizzBuzzyValue === '') {
      fizzBuzzyValue = index
    }
    returnArray.push(fizzBuzzyValue)
  }

  return returnArray
}
