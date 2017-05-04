/*
  For (1) a specified object x describing a simple symmetric directed graph, (2)
  a specified object y whose keys are a subset of the vertices of the graph, and
  (3) a specified vertex v of the graph, define a function to add to y as keys
  all additional vertices reachable from v. The function does not guarantee any
  result when any argument violates any precondition.

  Preconditions:
    0. x represents a graph by making each vertex a key whose value is an array
      of the other vertices to which it is directly connected.
    1. x is simple (no vertex is directly connected to itself).
    2. x is symmetric (all direct connections are described twice, once for
      each direction).
*/
var addReachables = function(graph, reachables, vertex) {
  /*
    If the specified vertex is a number that is a vertex in the specified
    array and that has an array value:
  */
  if (
    graph.hasOwnProperty(vertex)
    && Array.isArray(graph[vertex])
  ) {
    // For each vertex directly reachable from the specified vertex:
    for (var i = 0; i < graph[vertex].length; i++) {
      // If it is the specified vertex or is not any vertex:
      if (
        graph[vertex][i] === vertex
        || (! graph.hasOwnProperty(graph[vertex][i]))
      ) {
        // Return a failure result.
        return undefined;
      }
      // Otherwise, if it has already been encountered:
      else if (reachables.includes(graph[vertex][i])) {
        // Skip it.
      }
      // Otherwise, i.e. if it has not yet been encountered:
      else {
        // Add it to the array of reachable vertices.
        reachables.push(graph[vertex][i]);
        /*
          Add the vertices that are reachable from it and that are not
          yet in the array of reachable vertices to that array. If the
          addition failed:
        */
        if (
          typeof(addReachables(graph, reachables, graph[vertex][i]))
          === "undefined"
        ) {
          // Return a failure result.
          return undefined;
        }
      }
    }
    // Return true.
    return true;
  }
  // Otherwise, i.e. if the specified vertex is invalid:
  else {
    // Return a failure result.
    return undefined;
  }
};

/*
  Define a function to return whether a specified graph is completely
  connected.

  Preconditions:
    0. The graph is represented by an object each of whose properties is a
      vertex, whose key is a number and whose value is an array of the other
      vertices to which it is directly connected.
    1. The graph is simple (no vertex is directly connected to itself).
    2. The graph is symmetric (all direct connections are described twice,
      once for each direction).
*/
var isConnectedGraph = function(graph) {
  // If the specified graph is an object:
  if (typeof(graph) === "object") {
    // Identify an array of the vertices of the graph.
    var vertices = Object.keys(graph);
    // If it contains more than 1 vertex:
    if (vertices.length > 1) {
      // Identify an arbitrary vertex as the origin for analysis.
      var startVertex = vertices[0];
      /*
        Initialize an array of it and the other vertices reachable from it as
        containing only it.
      */
      var reachables = [startVertex];
      /*
        Add to it the vertices that are reachable from it. If the addition
        failed:
      */
      if (
        typeof(addReachables(graph, reachables, startVertex))
        === "undefined"
      ) {
        // Return a failure result.
        return undefined;
      }
      /*
        Otherwise, if all other vertices are reachable from the specified
        vertex:
      */
      else if (vertices.length === reachables.length) {
        // Return true.
        return true;
      }
      /*
        Otherwise, i.e. if fewer than all other vertices are reachable from
        the specified vertex:
      */
      else {
        // Return false.
        return false;
      }
    }
    // Otherwise, i.e. if the graph contains at most 1 vertex:
    else {
      // Return true.
      return true;
    }
  }
};

export default isConnectedGraph;
