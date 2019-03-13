export default function createVariant(utilities, generateDeclarations, prefix) {
  return Object.keys(utilities).reduce((variants, utilityKey) => {
    return {
      ...variants,
      [`${prefix}:${utilityKey}`]: generateDeclarations(utilities[utilityKey]),
    }
  }, {})
}
