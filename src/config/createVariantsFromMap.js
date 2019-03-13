import createVariant from "./createVariant"

export default function createVariantsFromMap(
  utilities,
  map,
  generateDeclarations
) {
  return Object.keys(map).reduce((variants, key) => {
    return {
      ...variants,
      ...createVariant(
        utilities,
        (value) => generateDeclarations(map[key], value),
        key
      ),
    }
  }, {})
}
