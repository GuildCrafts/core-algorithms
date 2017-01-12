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
    console.log('allNodes', allNodes)
    console.log('queue', queue)
    while(queue.length != 0) {
      console.log('queue:', queue)
      let nodeToVisit = queue.shift()
      console.log('nodeToVisit', nodeToVisit);
      let nodeNeighbors = graph[nodeToVisit]
      visitedNodes.push(nodeToVisit)
      nodeNeighbors.forEach(node => {
        if(visitedNodes.indexOf(node) === -1) {
          queue.push(node)
        }
      })
    }
    console.log('visitedNodes', visitedNodes)
length
    return allNodes.reduce((isConnected, node) => {
      return isConnected && (visitedNodes.indexOf(node) >= 0)
    }, true)
  }
}

let g = new Graph()
g.add('a', 'b')
g.add('a', 'c')
g.add('a', 'e')
g.add('f', 'g')
g.doBFS()



// g.add('b', 'd')
// g.add('c', 'a')
// g.add('c', 'd')
