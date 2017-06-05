export default function bubbleSort(data){
  var len = data.length;

  do {
      for (var i = 0; i < len - 1; i++) {
        if (data[i] > data[i + 1]) {//Check the current element and the one next to it. If we find an element who next elementt is higher, we run a function to swap their positions
          swap(data, i, i + 1);
        }
    }
  } while (len--);

  return data;
}

function swap(arr, indexA, indexB) {
  var temp = arr[indexA];//Stores a temp variable to start the copy
  arr[indexA] = arr[indexB];//Changes indexA to index B
  arr[indexB] = temp;//Replaces indexB with information that used to be A. This swaps their positions in the array.
};


module.exports = bubbleSort
