export default function setUnion(arr1, arr2) {
  if (arr2 == null) return arr1
  let difSet = [], newSet = [], counter = 0
  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] === arr2[counter]) {
      difSet[counter] = arr1[i]
      counter++
    }
    else {
      newSet[counter] = arr1[i]
      newSet[counter + 2] = arr2[i]
      counter++
    }
  }
  return newSet
}
