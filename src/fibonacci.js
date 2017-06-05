export default function fibonacci(input) {

  const fibArray = [0, 1]

  if (!Number.isInteger(input) || input < 1) {
    return undefined
  } else if (input === 1) {
    return [0]
  } else if (input === 2) {
    return fibArray
  } else {
    for (let i = 2; i < input; i++) {
      let current = fibArray[i - 1] + fibArray[i - 2]
      fibArray.push(current)
    }
  }
  return fibArray
}
