// isPalindrome
//
// Determine if a string is a palindrome. Return true or false.
//
// Ignore punctuation, spacing, and case sensitivity.
//
// isPalindrome('radar')
// // => true
//
// isPalindrome('bananas')
// // => false
//
// isPalindrome('A man, a plan, a canal: Panama')
// // => true

export default function isPalindrome(string) {
  var strToLowerCase = string.toLowerCase()
  var strWithoutSpecialCharAndSpaces = strToLowerCase.replace(/[^a-zA-Z]/g, "")
  var isPalindromeArray = strWithoutSpecialCharAndSpaces.split('')

  var shiftArray = []
  var popArray = []

  for (var i = 0; i < isPalindromeArray.length; i++) {
    shiftArray.push(isPalindromeArray.shift([i]))
    popArray.push(isPalindromeArray.pop([i]))
  }
  console.log('shift', shiftArray)
  console.log('pop', popArray)
  //check if both arrays match
  //return boolean
}


//regex to remove special characters and spaces
//2 empty arrays
//split string at characters
//shift from beginning of string into 1st array
//pop from end of string into 2nd array
//check if both arrays match
