function isPalindrome(str) {
  const regex = /[^A-Za-z]/g
  const forwardStr = str.toLowerCase().replace(regex, '')
  const backwardsStr = forwardStr.split('').reverse().join('')

  return forwardStr === backwardsStr
}

module.exports = isPalindrome
