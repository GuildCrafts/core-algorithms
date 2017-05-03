/*
  Define a function to perform a bubble sort of a specified array of numbers. The
  function’s ruturn value is not guaranteed when any precondition is violated.

  Preconditions:
    0. numArray is an array of 0 or more numbers, possibly containing duplicates.
*/
var bubbleSort = function(numArray) {
  // Initialize the count of completed passes as 0.
  var passesDone = 0;
  // Initialize the result as an array identical to the specified one.
  var sortedArray = numArray;
  // Declare the index of the first member of the pair being processed (pair start index).
  var pairStart = 0;
  // Until all required passes have been completed:
  while (passesDone < numArray.length - 1) {
    // Initialize the pair start index as identical to the count of completed passes.
    pairStart = 0;
    // Until all needed pairs have been processed:
    while (pairStart < numArray.length - 1 - passesDone) {
      // If either pair member is not a number:
      if (
        typeof(sortedArray[pairStart]) !== "number"
        || typeof(sortedArray[pairStart + 1]) !== "number"
      ) {
        // Return a failure result.
        return undefined;
      }      
      // Otherwise, if the current pair’s order is descending:
      else if (sortedArray[pairStart] > sortedArray[pairStart + 1]) {
        // Invert its order.
        sortedArray.splice(
          pairStart, 2, sortedArray[pairStart + 1], sortedArray[pairStart]
        );
      }
      // Otherwise, if it is ascending or tied:
      else if (sortedArray[pairStart] <= sortedArray[pairStart + 1]) {
        // Do nothing.
      }
      // Otherwise, i.e. if the elements are not comparable:
      else {
        // Return a failure result.
        return undefined;
      }
      // Increment the pair start index.
      pairStart++;
    }
    // Increment the count of completed passes.
    passesDone++;
  }
  // Return the sorted array.
  return sortedArray;
};

export default bubbleSort;
