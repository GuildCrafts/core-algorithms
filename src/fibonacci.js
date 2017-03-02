let arr = []
export default function fibonacci(num){
  for (var i = 0; i <= num; i = i + i) {
    arr.push(i)
  }
  return arr
}
