export default function setComplement([a], [b]) {
  if (a === null) {
    return b
  }
  if (b === null) {
    return a
  }
  for (let i = 0; i < b.length; i++) {
    if (b[i] !== a[i + 1]) {
      return [b[i]]
    }
  }
}
