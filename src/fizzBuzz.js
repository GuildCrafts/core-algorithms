export default function fizzBuzzz(num) {
	var array = []
	if (isNaN(num)) {return 'error'}
	for (var i = 1; i <= num; i++) {
		if (i % 15 == 0) {
			array.push('fizzBuzz')
			continue
		}
		if (i % 5 == 0 ) {
			array.push('Buzz')
			continue
		}
		if (i % 3 == 0) {
			array.push('Fizz')
			continue
		}
		array.push(i)
	}
	return array
}
