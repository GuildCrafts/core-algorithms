function mergeSort(data){ //If data.length is one, we know it can not be broken down anymore, so we just return the data
  if(data.length < 2) {
    return data;
  }
  var midPoint = Math.round(data.length/2); //Step 1. Determind where half of array is. Divide array length by 2, and use math.round to gurantee you get a whole integer
  return merge(//Calling a function
    mergeSort(data.slice(0, midPoint)),//use slice() on array, to cut in half, and store away from element 0 to where midPoint is
    mergeSort(data.slice(midPoint))//slice() again to copy array again. Starting from midPoint to end of array
    );
}

function merge(left, right){
  var out = [];
  while (left.length && right.length){// Step 3. We then loop through both lists being merged
    out.push(left[0] < right[0] ? left.shift() : right.shift()); //Step 4. and push the smallest item of the two inputs into the output list.
  }
  while(left.length){
    out.push(left.shift());
    }
  while(right.length){
    out.push(right.shift());
    }//  one of the lists is empty we add the remaining items ino the output lists
    
  return out;
}

mergeSort([10, 2, 7, 5, 8, 3, 6, 1, 4, 9]);