export default function setSymmetricDifference(firstSet, secondSet) {

  const intersection = new Set([...firstSet].filter(x => !secondSet.includes(x)))
  const intersection2 = new Set([...secondSet].filter(x => !firstSet.includes(x)))

  const intersectionArray = Array.from(intersection)
  const intersectionArray2 = Array.from(intersection2)

  const setArray = intersectionArray.concat(intersectionArray2)

  if (!firstSet || !secondSet) {
    return undefined
  } return setArray
}
