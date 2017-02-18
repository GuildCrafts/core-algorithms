export default function isPalindrome([str]) {
 for (let i = str.length; i >= 0; i--) {
   let revstr = str[i]
   return [revstr]
 }
 if (str.toLowerCase() === [revstr].toLowerCase()) {
   return true
 }
 else {
   return false
 }
}
