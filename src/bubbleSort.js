export default function bubbleSort(numbers) {
  let n = []
  let sorted = true
  for (let i = 0; i < numbers.length; i++) {
    let a = numbers[i]
    for (let j = 1; j < numbers.length; j++) {
      if (a < numbers[j]) {
        sorted = false
        n.push(a)
        let b = numbers.indexOf(a);
        if(b != -1) {
	         numbers.splice(b, 1);
        }
      }
    }
    if(sorted === false){
      bubbleSort(numbers)
    }
  return n
  }
}
