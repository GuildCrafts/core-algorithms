export default function setUnion(a, b) {

//combine two arrays
var union = [];
var newArr = a.concat(b);
  for(var i = 0; i < newArr.length; i++){

    if(union.indexOf(newArr[i]) === -1){

      union.push(newArr[i])
    }
  }
    return union
}

    //   const unionElements = []
    //   b.forEach( element => {
    //     if( ! a.includes( element ) ) {
    //       b.push( unionElements )
    //     }
    //   })
    //   console.log('unionElements',unionElements);
    //   // return a new set created from those elements
    //   return unionElements
    // }
