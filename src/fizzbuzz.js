export default function fizzBuzz(n) {
  for (let i = 0; i < n.length; i++) {
    if (n[i] % 3 === 0){
      return fizz
    }
    if (n[i] % 5 === 0) {
      return buzz
    }
    if (n[i] % 15 === 0) {
      return fizzbuzz
    }
    return [n]
  }
}
