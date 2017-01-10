export default function setIntersection (a, b) {
  let newArray = [];

  for (let i = 0; i < a.length; i++)  {
    if (b.indexOf(a[i]) !== -1) {
      // console.log('b indexOf', b.indexOf(a[i] );
      newArray.push(a[i]);
      console.log('arr',newArray );
    }
  }
  return newArray;
}
