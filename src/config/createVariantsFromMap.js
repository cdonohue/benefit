import createVariant from "./createVariant"

export default function createVariantsFromMap(
  utilities,
  map,
  generateDeclarations
) {
  if (!map) {
    return {}
  }
  return Object.keys(map).reduce(
    (variants, key) => ({
      ...variants,
      ...createVariant(
        utilities,
        (value) => generateDeclarations(map[key], value),
        key
      ),
    }),
    {}
  )
}
