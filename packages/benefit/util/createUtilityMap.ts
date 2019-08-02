export default function createUtilityMap(
  allUtilities: Array<(theme?: Object) => Object> = [],
  theme: Object = {}
): Object {
  const map: any = {}
  for (let i = 0; i < allUtilities.length; i++) {
    const utilityFn = allUtilities[i]
    const rulesMap: any = utilityFn(theme) || {}

    Object.keys(rulesMap).forEach(key => {
      map[key] = rulesMap[key]
    })
  }

  return map
}
