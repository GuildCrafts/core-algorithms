export default function setSymmetricDifference (a, b) {
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
    if (!a[i] === forEach(b)) {
      let a = a[i]
    }
    if (!b[i] === forEach(a)) {
      let b = b[i]
    }
  }
  return [a + b]
}
