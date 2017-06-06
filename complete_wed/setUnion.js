/* Union algorithm uses a part of the mergesort algorithm. You can push the 2 array elements into one empty array,
 and after that is done, run another function to "clear out" he original array, by making a new 
 empty array and push content onto that. */

var a = [1, 2, 3, 4];
var b = [2, 4, 6, 8];
var arr = [];

function setUnion(){
  
  while(a.length && b.length){
    arr.push(a[0] < b[0] ? a.shift() : b.shift());
  }
  while(a.length){
    arr.push(a.shift());
    }
    while(b.length){
    arr.push(b.shift());
    }
    //console.log(arr);
    return clearOut(arr)
}

function clearOut(arr){
    var tmp = [];
    for(var i = 0; i < arr.length; i++){
        if(tmp.indexOf(arr[i]) == -1){
        tmp.push(arr[i]);
        }
    }
    return tmp;
}
//function clearOut(arr){
setUnion(a, b);
// => [1, 2, 3, 4, 6, 8]