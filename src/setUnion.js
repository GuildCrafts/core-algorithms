export default function setUnion(a, b) {
	if (typeof(a) !== 'object' || typeof(b) !== 'object') {
		return "error"
	}
	var result = a
	if (b != null) {
		for (var i = 0; i < b.length; i++){
			if (result.includes(b[i])) {
				continue
			}
			result.push(b[i]);
		}
	}
	return result
}
