export default function collatzConjecture(n){
  if (n === 0){
    throw new Error('error');
  }
  let array =[n];
  let stop = n;
  while(array[array.length-1] !== 1){
    if (stop%2 === 0){
      array.push(stop/2);
      stop = stop/2;
    }
    else{
      array.push(3*stop+1);
      stop = 3*stop+1;
    }
  }

  return array;
}
