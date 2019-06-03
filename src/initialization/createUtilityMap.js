export default function createUtilityMap(allUtilities = [], theme) {
  const map = {}
  for (let i = 0; i < allUtilities.length; i++) {
    const utilityFn = allUtilities[i]
    const rulesMap = utilityFn(theme) || {}

    Object.keys(rulesMap).forEach((key) => {
      map[key] = rulesMap[key]
    })
  }

  return map
}
