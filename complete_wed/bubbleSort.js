function bubbleSort(data){
  var len = data.length; //step 1. Determine length of list being sorted tp determine how many passes through the list you will need
  
  do{
    for(var i = 0; i < len - 1; i++){ //step 2. Iterate our loop from first element to second to last element.
        if (data[i] > data[i + 1]){//step 3. Check the current element and the one next to it. If we find an element who next elemt is higher, we run a function to swap their positions
          swap(data, i, i + 1);
        }
    }
  }while (len--);
  
  return data;
}

function swap(arr, indexA, indexB){
  var temp = arr[indexA];//Step 1. Stores a temp variable to start the copy
  arr[indexA] = arr[indexB];//Step 2. changes indexA to index B
  arr[indexB] = temp;//Step 3. replaces indexB with information that used to be A. This swaps their positions in the array.
}

bubbleSort([10, 2, 7, 5, 8, 3, 6, 1, 4, 9]);