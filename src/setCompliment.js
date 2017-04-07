export default function setCompliment(a, b) {	
	var array = []
	if (typeof a !== 'object' || typeof b !== 'object') {
		return 'error'
	}
	else if (a.length !== b.length) {
		return 'not the same length'
	}
	for (var i = 0; i < a.length; i++) {
		function matches(element) {
		if (element === a[i]) return element
		}
		if (b.find(matches) !== undefined) {
			array.push(b.find(matches))
		}
	}
	for (var i = 0; i < array.length; i++) {
		var pos = b.indexOf(array[i])
		b.splice(pos, 1)
	}
	return b
}
