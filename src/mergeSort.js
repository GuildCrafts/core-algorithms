/*
  Define a function to empty any 2 ascendingly sorted arrays, merging them
  into 1 ascendingly sorted array and returning the latter. The function’s
  return value and the resulting contents of the input arrays are not
  guaranteed when any precondition is violated.

  Preconditions:
    0. arr0 and arr1 are ascendingly sorted arrays of numbers.
*/
var sortedMerge = function(arr0, arr1) {
  // Initialize the result as an empty array.
  var result = [];
  // Until no more elements remain in either input array:
  while (arr0.length > 0 || arr1.length > 0) {
    // If arr0 is exhausted:
    if (arr0.length === 0) {
      // Move the first element of arr1 to the end of the result.
      result.push(arr1.shift());
    }
    // Otherwise, if arr1 is exhausted:
    else if (arr1.length === 0) {
      // Move the first element of arr0 to the end of the result.
      result.push(arr0.shift());
    }
    // Otherwise, i.e. if neither input array is exhausted:
    else {
      /*
        If the first element of arr0 is smaller than the first element of
        arr1:
      */
      if (arr0[0] < arr1[0]) {
        // Move the former to the end of the result.
        result.push(arr0.shift());
      }
      // Otherwise:
      else {
        // Move the latter to the end of the result.
        result.push(arr1.shift());
      }
    }
  }
  // Return the merged and sorted array.
  return result;
};

/*
  Define a function to use merge sorting to return an array that is an
  ascendingly sorted copy of a specified array of numbers. The function’s
  return value is not guaranteed when any precondition is violated.

  Preconditions:
    0. numArray is an array of 0 or more numbers, possibly containing
      duplicates.
*/
var mergeSort = function(numArray) {
  /*
    If any element of the input array is other than a number, return a
    failure result.
  */
  for (var i = 0; i < numArray.length; i++) {
    if (typeof(numArray[i]) !== "number") {
      return undefined;
    }
  }
  // Identify the count of required passes.
  var passNeed = Math.ceil(Math.log2(numArray.length));
  // Initialize the count of completed passes as 0.
  var passesDone = 0;
  // Declare the size of an input array.
  var iSize;
  // Declare the count of a pass’s required merges.
  var mergeNeed;
  // Declare the count of a pass’s completed merges.
  var mergesDone;
  // Declare the count of a pass’s merged elements.
  var elementsMerged;
  // Declare the result of a merge.
  var mergedArray;
  // Until all required passes have been completed:
  while (passesDone < passNeed) {
    // Identify the input subarray size of the current pass.
    iSize = Math.pow(2, passesDone);
    // Identify the count of the current pass’s required merges.
    mergeNeed = Math.ceil(numArray.length / iSize / 2);
    // Initialize the count of merges done as 0.
    mergesDone = 0;
    // Until all merges of the current pass have been performed:
    while (mergesDone < mergeNeed) {
      // Identify the count of the current pass’s merged elements.
      elementsMerged = mergesDone * iSize * 2;
      // Identify the result of the next merge.
      mergedArray = sortedMerge(
        numArray.slice(elementsMerged, elementsMerged + iSize),
        numArray.slice(elementsMerged + iSize, elementsMerged + 2 * iSize)
      );
      // Replace the merged elements with its elements.
      numArray.splice(elementsMerged, iSize * 2, ...mergedArray);
      // Increment the count of the pass’s completed merges.
      mergesDone++;
    }
    // Increment the count of completed passes.
    passesDone++;
  }
  // Return the sorted array.
  return numArray;
};

export default mergeSort;
