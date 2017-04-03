closestPair = (points) => {
  for (let i = 0; i < points.length - 1; i++) {
    let a = points[i] = [x1, y1]
    for (let i = 1; i < points.length; i++) {
    let b = points[i] = [x2, y2]
    let distance = Math.sqrt(Math.pow((x1 - x2), 2) + Math.pow((y1 - y2), 2))
  }
}
  return {"pair: " points[a], points[b], "distance: " distance}
}
