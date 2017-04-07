export default function collatzConjecture(num){
  var array = [num];
  while(array[array.length-1] !== 1){
    if(array[array.length-1] === 1){
      break;
    } else if(array[array.length-1] % 2 === 0){
      array.push(array[array.length-1] / 2);
    } else if(num % 2 !== 0){
      array.push(array[array.length-1] * 3 + 1);
    }
  }
  return array;
}

collatzConjecture(7);
