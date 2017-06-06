//Return the intersection of two sets. This is similar to setunion, except here we are removing many indexes and elements, not storing them

const a = [1, 2, 3, 4];
const b = [2, 4, 6, 8];
var arr = [];

function setInsersection(){
  while( a.length > 0 && b.length > 0 ){  //run a while loop
     if(a[0] < b[0] ){
       a.shift(); //if a[0] is not the same as b[0], remove it out of the array with shift
     }else if (a[0] > b[0] ){
       b.shift(); //same with b[0]
     }else{ //they're equal here
       arr.push(a.shift());//so push one of them into empty array
       b.shift();//get rid of the other
     }
  }

  return arr;
}

setInsersection(a, b);
// => [2, 4]