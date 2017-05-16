export default function binarySearch (array, search) {
  let head = 0
  let tail = array.length - 1
  let currIndex, currNumber

  while (head <= tail) {
    currIndex = Math.floor((head + tail) / 2)
    currNumber = array[currIndex]

    if (currNumber < search) {
      head = currIndex + 1
    } else if (currNumber > search) {
      tail = currIndex - 1
    } else {
      return currIndex
    }
  }
  return -1
}
