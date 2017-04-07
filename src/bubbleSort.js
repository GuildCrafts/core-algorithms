export default function bubbleSort(array){

  if (array.length === 1){
    return array;
  }
  else if (array.length === 2){
    if (array[0] >= array[1]){
      return [array[1], array[0]];
    }
    else {
      return array;
    }
  }
  let counter = 0;
  let dontstop = true;
  while (dontstop){
    let keepgoing = true;
    counter = 0;
    while(counter<array.length-1){
      if(array[counter] > array[counter+1]){
         let temp = array[counter];
         array[counter] = array[counter+1];
         array[counter + 1 ] = temp;
         keepgoing = false;
      }
      counter = counter + 1;
    }
    if(keepgoing){
      dontstop = false;
    }
  }
  return array;
}
