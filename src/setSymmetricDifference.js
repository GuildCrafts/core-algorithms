export default function setSymmetricDifference(arr1, arr2) {
  if (arr2 == null) return arr1
  let newSet = [], counter = 0
  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] === arr2[counter]) {
      difSet[counter] = arr1[i]
      counter++
    }
    arr2[0] = arr1[0]
    arr2[1] = arr1[2]
  }
  return arr2
}
