export default function setUnion(a,b){
  var arr = [];
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
    return clearOut(arr);
}

function clearOut(arr){
    var tmp = [];
    for(var i = 0; i < arr.length; i++){
        if(tmp.indexOf(arr[i]) == -1){
        tmp.push(arr[i]);
        }
    }
    return tmp;
};

module.exports = setUnion
