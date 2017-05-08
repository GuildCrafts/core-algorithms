export default function collatzConjecture(input) {

  let finalArray = [],
      currentNumber = input

  if (!Number.isInteger(input)) {
    return undefined
  } else if (input === 1) {
    return [1];
  } else {
      while (currentNumber !== 1) {
        if (currentNumber % 2  === 0) {
          finalArray.push(currentNumber)
          currentNumber = currentNumber / 2
        } else {
          finalArray.push(currentNumber)
          currentNumber = (currentNumber * 3) + 1
        }
      }
      finalArray.push(currentNumber)
      return finalArray
  }
}
