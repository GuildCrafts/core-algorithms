export default function binarySearch(array, key) {
  var array = [5, 10, 15, 20, 25, 30, 35, 40, 45, 50];
  var lo = 0;
  var hi = array.length - 1;
  var mid;

  while(lo <= hi) { //run a loop through the array
    mid = Math.floor((lo + hi)/2, 10); //calculate the middle of the array
    if (array[mid] < key) {//if mid of the array is less than key
      lo = mid + 1;//cut array in half by moving the low from the first index to a spot 1 index higher than the mid.

      //With this, the loop now runs through less indexes
    } else if (array[mid] > key) {//if element is kess than key
      hi = mid - 1;//the end of the array is moved to one index removed from the mid of the array, cutting it in half.

    } else {//When there are no other places to go, and the array is essentially just one index, return the mid.
      return mid;
    }
  }
};
