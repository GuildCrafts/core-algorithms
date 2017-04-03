export default function setIntersection(arr1, arr2) {
  let difSet = []
  let counter = 0
  if (arr2 == null) return arr1
  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] === arr2[counter]) {
      difSet[counter] = arr1[i]
      counter++
    }
  }
  return difSet
}
