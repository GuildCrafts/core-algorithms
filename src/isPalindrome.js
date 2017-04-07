export default function isPalindrome(string) {
	var master = string.toLowerCase().replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g,"");
	var compare = master.split("").reverse().join("");
	if(master == compare) {
		return true
	}
	return false;
}
