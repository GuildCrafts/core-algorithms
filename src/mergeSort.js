export default function mergeSort(array) {
  let left = array.splice(0, (array.length / 2))
  let right = array.splice((array.length / 2), array.length)
  let middle = (left / 2) < (right / 2)
}
