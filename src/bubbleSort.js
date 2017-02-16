export default function bubbleSort(inputArray){
  let sorting = false
  for(let index = 0; index < inputArray.length; index ++) {
    let currentValue = inputArray[index]
    let nextValue = inputArray[index+1]
    if(nextValue < currentValue){
      inputArray[index] = nextValue
      inputArray[index+1] = currentValue
      sorting = true
    }
  }

  if(sorting) bubbleSort(inputArray)
  return inputArray
}
