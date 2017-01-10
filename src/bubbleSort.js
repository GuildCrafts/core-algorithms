export default function bubbleSort(array){
  if(Array.isArray(array) && array.every(Number.isInteger)){
    let temp
    for(let i = 0; i < array.length; i++){
      for(let j = 0; j < array.length - i; j++){
        if(array[j]>array[j+1]){
          temp = array[j]
          array[j] = array[j+1]
          array[j+1] = temp
        }
      }
    }
  }
  else
    return undefined;

  return array
}
