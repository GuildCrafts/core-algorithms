export default function setComplement(firstSet, secondSet) {

  const intersection = new Set([...secondSet].filter(x => !firstSet.includes(x)))

  if (!firstSet || !secondSet) {
    return undefined
  } return Array.from(intersection)
}
