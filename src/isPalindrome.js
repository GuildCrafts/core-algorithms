export default function isPalindrome(string){
  const s1 = string.replace(/\s/g,'').replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g,"").toLowerCase();
  const s2 = s1.split('').reverse().join('');
  return s2 === s1
}
