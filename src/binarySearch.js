export default function binarySearch(array, query) {
	if (typeof(array) !== 'object' || typeof(query) !== 'number') return 'error'

	function assignVal(){
		midInd = Math.floor(dissectArr.length / 2)
		if(dissectArr.length % 2 === 0) {
			midInd--
		}
		midVal = dissectArr[midInd]
	}

	function divide(arr, index){
		let workingArr = arr
		let newArr = []
		newArr.push(workingArr.splice(0, midInd + 1))
		newArr.push(workingArr)
        return newArr[index]
	}

	let dissectArr = [];
	for (let i = 0; i < array.length; i++) {
		dissectArr.push(array[i])
	}
	let midInd, midVal
	assignVal()

	while (query !== midVal) {
		if(query < midVal) {
			dissectArr = divide(dissectArr, 0)
            assignVal()

		}
		if(query > midVal) {
			dissectArr = divide(dissectArr, 1)
            assignVal()
		}
	}
	return array.indexOf(midVal)

}
