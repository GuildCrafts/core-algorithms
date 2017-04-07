class Graph {
  constructor() {
    this.relationships = {}
  }

  _addToRelationships(fromVert, toVert) {
    if (!this.relationships[fromVert]) {
      this.relationships[fromVert] = [toVert]
    } else {
      this.relationships[fromVert].push(toVert)
    }
  }

  add(fromVert, toVert) {
    this._addToRelationships(fromVert, toVert)
    this._addToRelationships(toVert, fromVert)
  }

  doBFS(root) {
    const graph = this.relationships
    const allNodes = Object.keys(graph)
    const startingNode = allNodes[0]
    let visitedNodes = [startingNode]
    let queue = Array.from(graph[startingNode])

    while(queue.length != 0) {
      let nodeToVisit = queue.shift()
      let nodeNeighbors = graph[nodeToVisit]
      visitedNodes.push(nodeToVisit)
      nodeNeighbors.forEach(node => {
        if(visitedNodes.indexOf(node) === -1) {
          queue.push(node)
        }
      })
    }
    length
    return allNodes.reduce((isConnected, node) => {
      return isConnected && (visitedNodes.indexOf(node) >= 0)
    }, true)
  }
}

'a': ['b', 'c', 'd']

let g = new Graph()
g.add('a', 'b')
g.add('a', 'c')
g.add('a', 'e')
g.add('f', 'g')
g.doBFS()
