export default function createVariantMap(
  allVariants = [],
  utilityMap = {},
  theme
) {
  const map = {}
  for (let i = 0; i < allVariants.length; i++) {
    const variantFn = allVariants[i]
    const rulesMap = variantFn(utilityMap, theme) || {}

    Object.keys(rulesMap).forEach((key) => {
      map[key] = rulesMap[key]
    })
  }

  return map
}
