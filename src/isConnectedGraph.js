export default function isConnectedGraph(graph) {
	if (typeof(graph) !== 'object') return "error"
	let keys = Object.keys(graph)
	let minPairs = (keys.length - 1) * 2
	let map = []
	for (let i = 0; i < keys.length; i++){
		for (let j = 0; j < graph[keys[i]].length; j++) {
			let pair = [keys[i], graph[keys[i]][j]]
			map.push(pair)
		}
	}
	if (map.length >= minPairs) {
		return true
	}
	return false
}
