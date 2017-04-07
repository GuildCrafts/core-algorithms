export default function setSymmetricDifference(a,b) {
	var array = a.concat(b), sameNum = []
	if (typeof a === 'string' || typeof b === 'string') {
		return 'error'
	}
	for (var i = 0; i < a.length; i++) {
		function matches(element) {
		if (element === a[i]) return element
		}
		if (b.find(matches) !== undefined) {
			sameNum.push(b.find(matches))
		}
	}
	for (var i = 0; i < sameNum.length; i++) {
		array.splice(array.indexOf(sameNum[i]), 1)
	}
	for (var i = 0; i < sameNum.length; i++) {
		array.splice(array.indexOf(sameNum[i]), 1)
	}
	return array
}
