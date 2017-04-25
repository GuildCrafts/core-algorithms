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
  var cleanStr = strToLowerCase.replace(/[^a-zA-Z]/g, "")
  var isPalindromeArray = cleanStr.split('')

  var shiftArray = []
  var popArray = []

  for (var i = 0; i < isPalindromeArray.length; i++) {
    shiftArray.push(isPalindromeArray.shift([i]))
    popArray.push(isPalindromeArray.pop([i]))
  }
  var shiftString = shiftArray.join('')
  var popString = popArray.join('')

  if (shiftString == popString) {
    return true
  } else {
    return false
  }
}
