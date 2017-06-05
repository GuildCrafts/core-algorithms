export default function setIntersection(a,b) {
  var arr = [];
  while( a.length > 0 && b.length > 0 ){  //run a while loop
     if(a[0] < b[0] ){
       a.shift(); //if a[0] is not the same as b[0], remove it out of the array with shift
     } else if (a[0] > b[0] ){
       b.shift(); //same with b[0]
     } else { //they're equal here
       arr.push(a.shift());//so push one of them into empty array
       b.shift();//get rid of the other
     }
  }
  return arr;
};

module.exports = setIntersection
