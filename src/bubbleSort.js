export default function bubbleSort(array) {
	if (typeof array !== 'object') return 'error'

	let sorted = false

	function swap(array, a, b) {
		let aNew = array[b]
		let bNew = array[a]
		array.splice(a, 1, aNew)
		array.splice(b, 1, bNew)
	}

	while (!sorted){
		sorted = true
		for (let i = 0, j = 1; i < array.length; i++, j++) {
			if (array[i] > array[j]) {
				swap(array, i, j)
				sorted = false
			}
		}
	}

	return array
}
