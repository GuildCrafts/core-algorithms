export default function setIntersecion(firstSet, secondSet) {

  const intersection = new Set([...firstSet].filter(x => secondSet.includes(x)))

  if (!firstSet || !secondSet) {
    return undefined
  } return Array.from(intersection)
}
