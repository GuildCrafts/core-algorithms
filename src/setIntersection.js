export default function setIntersection(a, b) {
	var array = []
	if (typeof a === 'string' || typeof b === 'string') {
		return 'error'
	}
	for (var i = 0; i < a.length; i++) {
		function matches(element) {
		if (element === a[i]) return element
		}
		if (b.find(matches) !== undefined) {
			array.push(b.find(matches))
		}
	}
	if (array.length === 0) {
			return 'There are no numbers in common'
		}
	else return array
}
