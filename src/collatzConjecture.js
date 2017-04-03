export default function collatzConjecture(num) {
  let a = []
  let counter = 0
  if (num === 0) {
    return [num]
  }
  if (num === 1) {
    a[counter++] = num
  }
  while (num > 1) {
    if (num % 2 === 0) {
      num /= 2
      a[counter++] = num
    }
    else {
      num = (3 * num) + 1
      a[counter++] = num
    }
    collatzConjecture(num)
    return a
  }
}