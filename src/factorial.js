export default function factorial(num) {
	if (num < 0) return 'error'
	var result = num
	for (var j = 1; j < num; j++) {
		 result *= j
	}
	return result
}
