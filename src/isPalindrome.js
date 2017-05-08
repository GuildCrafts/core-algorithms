export default function isPalindrome(input) {

  const condensedString = input.replace(/[\W_]+/g, '').toLowerCase()
  const reversedString = condensedString.split('').reverse().join('')
  return condensedString === reversedString

}
