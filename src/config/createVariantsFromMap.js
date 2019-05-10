import createVariant from "./createVariant"

export default function createVariantsFromMap(
  utilities,
  map,
  generateDeclarations
) {
  if (!map) {
    return {}
  }
  return Object.keys(map).reduce((variants, key) => {
    const v = createVariant(
      utilities,
      (value) => generateDeclarations(map[key], value),
      key
    )

    Object.keys(v).forEach((className) => {
      variants[className] = v[className]
    })

    return variants
  }, {})
}
