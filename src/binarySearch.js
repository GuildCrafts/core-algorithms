export default function binarySearch(numbers, n) {
  for (let i = 0; i < numbers.length; i++) {
    if (n === numbers[i]) {
      return i
    }
  }
  for (let i = 0; i < numbers.length; i++) {
      if (n !== numbers[i]) {
        return 'Not Found'
    }
  }
}
