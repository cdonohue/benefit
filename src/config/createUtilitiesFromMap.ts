export default function createUtilitiesFromMap(
  map: any = {},
  generateDeclarations: any,
  prefix: any = ""
) {
  if (!map) {
    return {}
  }
  return Object.keys(map).reduce((utilities: any, key) => {
    const value = map[key]
    const label = Array.isArray(map) ? value : key
    const className = [prefix, label === "default" ? null : label]
      .filter(Boolean)
      .join("-")

    const declarations = generateDeclarations(value)

    utilities[className] = declarations

    return utilities
  }, {})
}
