function fibonacci( num ) {
  var result = [0]

  if ( typeof num !== 'number' ) {
    return 'Your not a number'
  }
  for ( var index = 0; index < num - 1; index++ ) {
    if ( result.length === 1 ) {
      result.push( result[0] + 1 )
    } else {
      result.push( result[index - 1] + result[index] )
    }
  }
  return result
}

module.exports = fibonacci
