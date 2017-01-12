export default function binarySearch(arraySort, numberSearch) {
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
