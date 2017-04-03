export default function bubbleSort(numbers) {
    for (let i = 0, j = 1; i < numbers.length; i++, j++) {
      while (numbers[i] > numbers[j]) {
        numbers[j] = [numbers[i], numbers[i] = numbers[j]][0]
        bubbleSort(numbers)
      }
    }
    return numbers
  }
