export default function setUnion(myArray) {

  return [...new Set(myArray)]; // .. Es6 version of .unique method

}
console.log(setUnion());
