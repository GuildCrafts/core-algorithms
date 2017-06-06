const factorial = value => {

  if( typeof value !== 'number' ){
    return 'value is not a number'
  }

  let factorialNumber = 1
  for(let index = 1; index <= value; index++){
    factorialNumber *= index
  }

  return factorialNumber

}

export default factorial
