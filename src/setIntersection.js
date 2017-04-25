// setIntersection
//
// Return the intersection of two sets.
//
// const a = [1, 2, 3, 4]
// const b = [2, 4, 6, 8]
// setIntersection(a, b)
// // => [2, 4]


export default function setIntersection(a, b){
  if ( !Array.isArray(a) || !Array.isArray(b) ) {
    throw new Error('Invalid input format. Expected two arrays')
  }
  let concatArr = a.concat(b)
  let sortedArr = concatArr.sort()

  function isDuplicate(value, index, array){
    return array.indexOf(value) !== index
  }
  let filteredArr = sortedArr.filter(isDuplicate)
  return filteredArr
}
