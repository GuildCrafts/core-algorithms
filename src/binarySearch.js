/*
  Define a function to perform a uniform binary search for a specified number in an array
  of number elements sorted in non-descending order and to return the index of some
  instance of the number in the array, or undefined if the array contains no instance of
  the number. The function’s ruturn value is not guaranteed when any precondition is
  violated.

  Preconditions:
    0. toFind is a number.
    1. ascendingArray is an array of 0 or more numbers in non-descending order,
      possibly containing duplicates.
*/
var binarySearch = function(toFind, ascendingArray) {
  // Initialize the start and end indexes of the active subarray as the array’s.
  var startIndex = 0;
  var endIndex = ascendingArray.length - 1;
  // Declare the index of a splitting element.
  var splitIndex;
  // If the array has length 0:
  if (ascendingArray.length === 0) {
    // Return a failure result.
    return undefined;
  }
  // Otherwise, if it has length 1:
  else if (ascendingArray.length === 1) {
    // If its element is equal to the number:
    if (ascendingArray[0] === toFind) {
      // Return its index.
      return 0;
    }
    // Otherwise, i.e. if its element is not equal to the number:
    else {
      // Return a failure result.
      return undefined;
    }
  }
  // Otherwise, if it has length 2:
  else if (ascendingArray.length === 2) {
    // If its first element is equal to the number:
    if (ascendingArray[0] === toFind) {
      // Return its index.
      return 0;
    }
    // Otherwise, if its second element is equal to the number:
    else if (ascendingArray[1] === toFind) {
      // Return its index.
      return 1;
    }
    // Otherwise, i.e. if neither of its elements is equal to the number:
    else {
      // Return a failure result.
    }
  }
  // Until the active subarray is no longer splittable, i.e. until its length is 2 or less:
  while (startIndex + 1 < endIndex) {
    // If its first element is equal to the number:
    if (ascendingArray[startIndex] === toFind) {
      // Return its index.
      return startIndex;
    }
    // Otherwise, if it is smaller than the number:
    else if (ascendingArray[startIndex] < toFind) {
      // If its last element is equal to the number:
      if (ascendingArray[endIndex] === toFind) {
        // Return its index.
        return endIndex;
      }
      // Otherwise, if it is greater than the number:
      else if (ascendingArray[endIndex] > toFind) {
        // Identify a splitting element.
        splitIndex = Math.floor((startIndex + endIndex) / 2);
        // If it is smaller than the number:
        if (ascendingArray[splitIndex] < toFind) {
          // Make it the start of the active subarray.
          startIndex = splitIndex;
        }
        // Otherwise, if it is greater than the number
        else if (ascendingArray[splitIndex] > toFind) {
          // Make it the end of the active subarray.
          endIndex = splitIndex;
        }
        // Otherwise, i.e. if it is equal to the number:
        else {
          // Return its index.
          return splitIndex;
        }
      }
      /*
        Otherwise, i.e. if the last element of the active subarray is smaller than the
        number:
      */
      else {
        // Return a failure result.
        return undefined;
      }
    }
    /*
      Otherwise, i.e. if the first element of the active subarray is greater than the
      number:
    */
    else {
      // Return a failure result.
      return undefined;
    }
  }
  // The array does not contain an instance of the number. Return a failure result.
  return undefined;
};

export default binarySearch;
