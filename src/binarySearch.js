let binarySearch = (arraySort, numberSearch) => {
  let min = 0;
  let max = arraySort.length-1;

  while(min !== max){
    let middle = min + Math.ceil((max-min)/2)
    if(numberSearch === arraySort[middle]){
      return middle;
    } else if(numberSearch > arraySort[middle]){
      min = middle + 1;//shift spot one from old middle
    } else {
      max = middle-1
    }
  }
  return -1;
}
console.log('binarySearch',binarySearch([1,4,5,6,9,29], 29) );
console.log('----------')
console.log('binarySearch',binarySearch([1,4,5,6,9,29], 6) );
console.log('----------')
console.log('binarySearch',binarySearch([1,4,5,6,9,29], 4) );
