function factorial( num ) {
  var originalnum = num

  if ( typeof num !== 'number') {
    return 'Please provide a valid number.'
  }
  while ( num-- > 2 ) {
    originalnum *= num
  }
  return originalnum
}
 module.exports = factorial
