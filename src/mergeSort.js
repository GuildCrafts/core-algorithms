export default function mergeSort(arr) {
	if (arr['length'] <= 1) { return arr }
	let result = []
	let mid = Math.floor(arr['length'] / 2)
	let left = mergeSort(arr.splice(0, mid))
	let right = mergeSort(arr)

	while(left.length > 0 && right.length > 0) {
		let valueA = left[0]
		let valueB = right[0]

		if ( valueA < valueB ) {
			result.push(left.shift())
		}
		else {
			result.push(right.shift())
		}
	}

	while(left.length > 0) {
		result.push(left.shift())
	}

	while ( right.length > 0 ) {
		result.push(right.shift())
	}
	return result
}
