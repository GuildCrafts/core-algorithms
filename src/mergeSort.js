export default function mergeSort(array){

   let n = array.length;
  if (n < 2) return;

  let left = array.slice(0, n/2);
  let right = array.slice(n/2, n);

  mergeSort(left);
  mergeSort(right);

  let i = 0;
  let j = 0;
  let a = 0;

  while (i < left.length && j < right.length) {
    if(left[i] < right[j]) {
      array[a] = left[i];
      a++;
      i++;
    }
    else if (right[j] < left[i]) {
      array[a] = right[j];
      a++;
      j++;
    }
    else if (left[i] === right[j]) {
      array[a] = left[i];
      array[a+1] = right[j];
      a += 2;
      i++;
      j++;
    }
  }
  while (i < left.length) {
    array[a] = left[i];
    a++;
    i++;
  }
  while (j < right.length) {
    array[a] = right[j];
    a++;
    j++;
  }
  return array;
}
