export default function fibonacci(num, array) {
	if (array === undefined) {array = []}
	if (num < 2) {
		array.push(num)
	}
	array.push(fibonacci(num - 1, array) + fibonacci(num - 2, array))
	return result
}
