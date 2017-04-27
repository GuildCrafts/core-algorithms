// setSymmetricDifference
//
// Return the symmetric difference of two sets.
//
// const a = [1, 2, 3, 4]
// const b = [2, 4, 6, 8]
// setSymmetricDifference(a, b)
// // => [1, 3, 6, 8]


export default function setSymmetricDifference(setA, setB) {
  if ( !Array.isArray(setA) || !Array.isArray(setB) ) {
    throw new Error('Invalid input format. Expected two arrays')
  }
  let complementArray = []

  for(let element of setB) {
    if(!setA.includes(element)) {
      complementArray.push(element)
    }
  }
  for(let element of setA){
    if(!setB.includes(element)) {
      complementArray.push(element)
    }
  }
  return complementArray.sort()
}

//
