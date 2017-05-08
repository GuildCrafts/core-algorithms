export default function factorial(input){

  if (input === 0 || input === 1) {
    return 1
  }
  for (let i = input - 1; i >= 1; i--) {
    input *= i;
  }
  return input
}
