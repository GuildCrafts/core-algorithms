export default function setUnion(firstSet, secondSet) {

  if (!firstSet || !secondSet) {
    return undefined
  } else {
    let finalSet = new Set([...firstSet, ...secondSet])
    return Array.from(finalSet)
  }
}
