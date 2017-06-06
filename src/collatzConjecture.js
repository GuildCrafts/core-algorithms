export default function assembleCollatz(num) {
  let collatzArray = [num];

  while ( collatzArray[collatzArray.length-1] !== 1) {
    let lastNumber = collatzArray[collatzArray.length-1];

    if (lastNumber % 2 === 0) {
      collatzArray.push(lastNumber / 2)
    } else {
      collatzArray.push((3 * lastNumber) + 1)
    }
  }
  return collatzArray;
}
console.log(assembleCollatz(7));

//initalize function (num)
// create empty arraySequence
 // while (the last number of arraySequence is not 1)
  //   if num is even
  //    push num / 2 to the array
  //    else if push 3num + 1 to arraySequence
 // return sequence
