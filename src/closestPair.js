// Define a function to validate an array of 2 numbers.

var isNumPair = function(numPair) {
  // Return whether the argument is a 2-element array of numbers.
  return numPair.length === 2 &&
  typeof(numPair[0]) === "number" &&
  typeof(numPair[1]) === "number"
};

// Define a function to validate an array of arrays of 2 numbers.

var isNumPairArray = function(numPairArray) {
  // If the argument is an array:
  if (Array.isArray(numPairArray)) {
    // For each of its elements:
    for (var i = 0; i < numPairArray.length; i++) {
      // If it is an array of 2 numbers:
      if (isNumPair(numPairArray[i])) {
        // Continue checking.
        continue;
      }
      // Otherwise, i.e. if it is not an array of 2 numbers:
      else {
        // Return false.
        return false;
      }
    }
    // All the elements were arrays of 2 numbers, so return true.
    return true;
  }
  // Otherwise, i.e. if the argument is not an array:
  else {
    // Return false.
    return false;
  }
}

/*
  Define a function to return the distance between 2 specified points.

  Preconditions:
    0. The arguments are 2 arrays of 2 numbers.
*/

var distance2D = function(point0, point1) {
  return Math.sqrt((point0[0] - point1[0]) ** 2 + (point0[1] - point1[1]) ** 2);
}

/*
  Define a function to return the pair of points drawn from a specified array
  of points with the shortest distance between them among all pairs of points
  drawn from the array, with the points in the pair ordered in the same order
  in which they appear in the array. The function does not guarantee any
  result when any precondition is violated.

  This function uses a brute-force method and is therefore not expected to be
  optimally efficient.

  Preconditions:
    0. pointArray is an array of 2 or more arrays of 2 numbers.

    1. There is a pair of numbers in pointArray with the uniquely smallest
      distance between them.
*/
var closestPair = function(pointArray) {
  // If the argument is an array of 2 or more arrays of 2 numbers:
  if (isNumPairArray(pointArray) && pointArray.length > 1) {
    // Initialize the minimum distance found so far as infinity.
    var minDistance = Infinity;
    // Declare the point pair with that distance.
    var minPoints;
    // Declare the distance between the points of the current pair.
    var thisDistance;
    // For each point except the last:
    for (var i = 0; i < pointArray.length - 1; i++) {
      // For each subsequent point:
      for (var j = i + 1; j < pointArray.length; j++) {
        // Identify the distance between those points.
        thisDistance = distance2D(pointArray[i], pointArray[j]);
        // If it is smaller than the minimum so far:
        if (thisDistance < minDistance) {
          // Update the latter.
          minDistance = thisDistance;
          // Identify the pair as the one with the minimum distance so far.
          minPoints = [pointArray[i], pointArray[j]];
        }
      }
    }
    // Return the pair with the minimum distance.
    return minPoints;
  }
  // Otherwise, i.e. if the argument is not an array of arrays of 2 numbers:
  else {
    // Return a failure result.
    return undefined;
  }
};

export default closestPair;
