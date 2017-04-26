// setUnion
//
// Return the union of two sets.
//
// const a = [1, 2, 3, 4]
// const b = [2, 4, 6, 8]
// setUnion(a, b)
// // => [1, 2, 3, 4, 6, 8]

export default function setUnion(a, b){
  if (!Array.isArray(a) || !Array.isArray(b)){
    throw new Error('Invalid input format. Expected two arrays')
  }
  let concatArr = a.concat(b)
  let sortedArr = concatArr.sort()

  function isUnique(value, index, array){
    return array.indexOf(value) === index
  }
  let filteredArr = sortedArr.filter(isUnique)
  return filteredArr
}
