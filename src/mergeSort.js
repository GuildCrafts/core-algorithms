export {mergeSort};

function makeArrayOfArrays(array) {
  return array.map(function(member){
    return [member]
  })
}

function sortArrays(arrayA, arrayB) {
  let results = [];
//  console.log('SA: start', arrayA, arrayB)
  while (Math.max(arrayA.length, arrayB.length) > 0){
    // console.log('SA: arrayA', arrayA)
    // console.log('SA: arrayB', arrayB)
    let member
    // if we have two members to compare
    if (arrayA.length > 0 && arrayB.length > 0){
      // take the smaller one
      member = arrayA[0] < arrayB[0]
        ? arrayA.shift()
        : arrayB.shift()
    }else{
      // take whichever member exists
      member = arrayA.length > 0
        ? arrayA.shift()
        : arrayB.shift()
    }

    // console.log('SA: member ->', member)
    results.push(member)
  }
//  console.log('SA: results', results)
  return results;
}

//actual merge sort
function mergeSort(array) {
  let arrayOfArrays = makeArrayOfArrays(array);
  //console.log('MS: start', arrayOfArrays)
  while(arrayOfArrays.length > 1){
    for (var i = 0; i < arrayOfArrays.length; i++) {
      // console.log('MS: start', {i})
      // console.log('MS: before', arrayOfArrays)
      const sets = arrayOfArrays.splice(i, 2)
      // console.log('MS: sets', sets)
      const sortedSets = sortArrays(sets[0], sets[1])
      arrayOfArrays.splice(i, 0, sortedSets)
      // console.log('MS: after', arrayOfArrays)
    }
  }
  return arrayOfArrays[0]
}

//console.log('FINAL RESLT', mergeSort([10,30,40,3,2,4,6,7]))
