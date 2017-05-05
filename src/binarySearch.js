/*
  Define a function to perform a uniform binary search for a specified number
  in an array of number elements sorted in non-descending order and to return
  the index of some instance of the number in the array, or undefined if the
  array contains no instance of the number. The function’s return value is
  not guaranteed when any precondition is violated.

  Preconditions:
    0. toFind is a number.
    1. ascendingArray is an array of 0 or more numbers in non-descending order,
      possibly containing duplicates.
*/
var binarySearch = function(toFind, ascendingArray) {
  // If the arguments are valid:
  if (typeof(toFind) === "number" && Array.isArray(ascendingArray)) {
    // Identify the length of the array.
    var arrLength = ascendingArray.length;
    // Initialize the start, midpoint, and end of the unignorable subarray.
    var indexes = [0, Math.floor(arrLength / 2), arrLength - 1];
    // As long as any subarray is unignorable:
    while (indexes[0] <= indexes[2]) {
      // If its midpoint element is the number:
      if (ascendingArray[indexes[1]] === toFind) {
        // Return its index.
        return indexes[1];
      }
      // Otherwise, i.e. if its midpoint is not the number:
      else {
        // If the unignorable subarray has been exhausted:
        if (indexes[2] <= indexes[0]) {
          // Return a failure result.
          return undefined;
        }
        // Otherwise, i.e. if the unignorable subarray still exists:
        else {
          // If the midpoint is smaller than the number:
          if (ascendingArray[indexes[1]] < toFind) {
            // Redefine the new start of the unignorable subarray.
            indexes[0] = indexes[1] + 1;
          }
          // Otherwise, i.e. if the midpoint is greater than the number:
          else {
            // Redefine the new end of the unignorable subarray.
            indexes[2] = indexes[1] - 1;
          }
          // Redefine the midpoint index accordingly.
          indexes[1] = Math.floor((indexes[0] + indexes[2]) / 2);
        }
      }
    }
  }
  // Otherwise, i.e. if either argument is invalid:
  else {
    // Return a failure result.
    return undefined;
  }
};

export default binarySearch;
