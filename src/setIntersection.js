export default function setIntersection(a, b) {
  if (a === null) {
    return b
  }
  else if (b === null) {
    return a
  }
  else if (a.length < b.length) {
    let max = b.length
    for (let i = 0; i < max; i++) {
      if (a[i] === forEach(b)) {
        return a = a[i]
      }
      else {
        let max = a.length
        if (b[i] === forEach(a)) {
          return b = b[i]
        }
      }
    }
  return (a + b)
  }
}
