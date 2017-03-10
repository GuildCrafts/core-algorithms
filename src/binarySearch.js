import mergeSort from '../src/mergeSort';

export default function binarySearch(array, choice) {
  function findIndex(array, choice, indexArray) {
    // recursive function here
    let workingIndex = array.length - 1;
    let halfIndex = Math.ceil(workingIndex / 2);

    // splits arrays
    let left = array.slice(0, halfIndex);
    let right = array.slice(halfIndex, workingIndex + 1);

    // splits accompaning indexes
    let leftIndex = indexArray.slice(0, halfIndex);
    let rightIndex = indexArray.slice(halfIndex, workingIndex + 1);

    //checks if choice is in left
    if (choice < right[0] && left.length === 1) {
      // update the answer array, which we think might be in the scope of this
      // function
      answer.push(leftIndex[0]);
    }
    // checks if choice is left
    else if (choice < right[0]) {
      findIndex(left, choice, leftIndex);
    }
    // checks if choice is in the right
    else if (choice > left[halfIndex - 1] && right.length === 1) {
      answer.push(rightIndex[0]);
    }
    else if (choice > left[halfIndex - 1]) {
      findIndex(right, choice, rightIndex);
    }
  }

  let sorted = mergeSort(array);
  let indexArray = [];
  indexArray = populate(indexArray, array);
  let answer = [];

  // if array has only one element, return that as answer

  findIndex(array, choice, indexArray);
  return answer[0];

}



function populate(ind, array) {
  for (let i = 0; i < array.length; i++) {
    ind.push(i);
  }
  return ind;
}
