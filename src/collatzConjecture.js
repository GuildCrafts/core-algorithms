export default function collatzConjecture(num) {
	var array = [num]
	var i = 0
	var n
	if (isNaN(num)) return 'error'
	while (array[i] != 1) {
		if (array[i] % 2 === 0) {
			n = array[i] / 2
			array.push(n)
		}
		else {
			n = (3 * array[i]) + 1
			array.push(n)
		}
		i++
	}
	return array
}
