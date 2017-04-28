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

let isPalindrome = string => {
  let strToLowerCase = string.toLowerCase()
  let cleanStr = strToLowerCase.replace(/[^a-zA-Z]/g, '')
  let isPalindromeArray = cleanStr.split('')

  let shiftArray = []
  let popArray = []

  for (let i = 0; i < isPalindromeArray.length; i++) {
    shiftArray.push(isPalindromeArray.shift([i]))
    popArray.push(isPalindromeArray.pop([i]))
  }
  let shiftString = shiftArray.join('')
  let popString = popArray.join('')

  if (shiftString == popString) {
    return true
  } else {
    return false
  }
}

module.exports = { isPalindrome }
