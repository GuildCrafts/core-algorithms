// setComplement
//
// Return the complement of two sets.
//
// const a = [1, 2, 3, 4]
// const b = [2, 4, 6, 8]
// setComplement(a, b)
// // => [6, 8]


let setComplement = (setA, setB) => {
  if ( !Array.isArray(setA) || !Array.isArray(setB) ) {
    throw new Error('Invalid input format. Expected two arrays')
  }
  let complementArray = []
  for(let element of setB) {
    if(!setA.includes(element)) {
      complementArray.push(element)
    }
  }
  return complementArray
}

module.exports = { setComplement }
