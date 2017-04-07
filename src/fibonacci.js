export default function fibonacci(num) {
	if (isNaN(num)) { return new Error("NaN") }
	function findFib(num){
		if (num < 2) { return num }
		return findFib(num - 1) + findFib(num - 2)
	}
	let result = []
	for (let i = 0; i < num; i++) { result.push(findFib(i)) }
	return result
}
