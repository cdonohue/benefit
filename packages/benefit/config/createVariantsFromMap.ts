import createVariant from "./createVariant"

export default function createVariantsFromMap(
  utilities: any,
  map: any,
  generateDeclarations: any
) {
  if (!map) {
    return {}
  }
  return Object.keys(map).reduce((variants: any, key) => {
    const v = createVariant(
      utilities,
      (value: any) => generateDeclarations(map[key], value),
      key
    )

    Object.keys(v).forEach((className) => {
      variants[className] = v[className]
    })

    return variants
  }, {})
}
