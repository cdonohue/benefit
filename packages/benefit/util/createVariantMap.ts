export default function createVariantMap(
  allVariants: Array<any> = [],
  utilityMap: Object = {},
  theme: Object = {}
): Object {
  const map: any = {}
  for (let i = 0; i < allVariants.length; i++) {
    const variantFn = allVariants[i]
    const rulesMap = variantFn(utilityMap, theme) || {}

    Object.keys(rulesMap).forEach(key => {
      map[key] = rulesMap[key]
    })
  }

  return map
}
