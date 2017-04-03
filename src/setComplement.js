export default function setComplement(arr1, arr2) {
  if (arr2 == null) return arr1
  let simSet = [], comSet = [], counter = 0
  for (let i = 0; i < arr1.length; i++) {
    if (arr2[counter] === arr1[i]) {
      simSet[counter] = arr2[counter]
      counter++
    }
  }
  return arr2.splice(simSet[0], simSet[1])
}
