export default function fibonacci(num){

  const fibArray = [0, 1]
  let a = 1, b = 0, temp;

  while (num - 3 >= 0){
    temp = a
    a = a + b
    b = temp
    fibArray.push(a)
    num--
  }
  return fibArray
}
