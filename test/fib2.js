export default function fibonacci(num) {
	let result = []
	function findFib(num){
		if (num < 2) {
			return num
		}
		return findFib(num - 1) + findFib(num - 2)
	}
	for (let i = 0; i < num; i++) {
		result.push(findFib(i))
	}
	console.log(result)
	return result
}
