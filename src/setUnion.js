export default function setUnion(a, b) {
  if (a === null) {
    return b
  }
  if (b === null) {
    return a
  }
  if (a.length < b.length) {
    let max = b.length
  }
  else {
    let max = a.length
  }
  for (let i = 0; i < max; i++) {
    if (a[i] === forEach(b)) {
      return a[i]
    }
  }
    if (!a[i] === forEach(b)) {
      let a = a[i]
      return a
    }
    if (!b[i] === forEach(a)) {
      let b = b[i]
      return b
    }
  return [a[i] + a + b]
}
