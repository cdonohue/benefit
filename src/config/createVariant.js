export default function createVariant(utilities, generateDeclarations, prefix) {
  if (!utilities) {
    return {}
  }
  return Object.keys(utilities).reduce((variants, utilityKey) => {
    variants[`${prefix}\\:${utilityKey}`] = generateDeclarations(
      utilities[utilityKey]
    )
    return variants
  }, {})
}
