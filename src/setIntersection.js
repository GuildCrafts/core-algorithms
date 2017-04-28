// setIntersection
//
// Return the intersection of two sets.
//
// const a = [1, 2, 3, 4]
// const b = [2, 4, 6, 8]
// setIntersection(a, b)
// // => [2, 4]


let setIntersection = (setA, setB) => {
  if ( !Array.isArray(setA) || !Array.isArray(setB) ) {
    throw new Error('Invalid input format. Expected two arrays')
  }
  let complementArray = []

  for(let element of setB) {
    if(setA.includes(element)) {
      complementArray.push(element)
    }
  }
  for(let element of setA){
    if(setB.includes(element)) {
      complementArray.push(element)
    }
  }
  function isDuplicate(value, index, array){
    return array.indexOf(value) !== index
  }
  let filteredArr = complementArray.filter(isDuplicate)
  return filteredArr.sort()
}

module.exports = { setIntersection }
