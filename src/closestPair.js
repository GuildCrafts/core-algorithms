export default function closestsPair(points) {
	if (typeof(points) !== "object") return "error"
	let pair = []
	let minDist = Infinity
	let result = {}
	for (let i = 0; i < points.length; i++) {
		for (let j = 1; j < points.length; j++){
			if (i===j){
				continue
			}
			let x2 = points[i][0], y2 = points[i][1]
			let x1 = points[j][0], y1 = points[j][1]
			let a = [x1, y1], b = [x2, y2]
			let dist = Math.abs(x2 - x1) + Math.abs(y2 - y1)
			if (dist < minDist) {
				minDist = dist
				pair = []
				pair.push(b, a)
				result.pair = pair
				result.distance = dist
			}
		}
	}
	return result
}
