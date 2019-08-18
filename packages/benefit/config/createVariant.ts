export default function createVariant(
  utilities: any,
  generateDeclarations: any,
  prefix: any
) {
  if (!utilities) {
    return {}
  }
  return Object.keys(utilities).reduce((variants: any, utilityKey) => {
    variants[`${prefix}:${utilityKey}`] = generateDeclarations(
      utilities[utilityKey]
    )
    return variants
  }, {})
}
