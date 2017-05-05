export default function setUnion {()} {




  Return the union of two sets.

  const a = [1, 2, 3, 4]
  const b = [2, 4, 6, 8]
  setUnion(a, b)
  // => [1, 2, 3, 4, 6, 8]

setUnion (arr) => //could be a quicksort algorithm

const union = [];
 for (const i = 0; i < arr.length; i++) {
 for (const j = 0; i < arr.length; j++){
   const repeat = array[i];
   if (union.indexOf(repeat) !== -1 ) {
     return true;
   }
  union.push(repeat);
  }
  return false;
  }
 }
}

/*function hasDuplicates(array) {
    var valuesSoFar = [];
    for (var i = 0; i < array.length; ++i) {
        var value = array[i];
        if (valuesSoFar.indexOf(value) !== -1) {
            return true;
        }
        valuesSoFar.push(value);
    }
    return false;
}
*/
