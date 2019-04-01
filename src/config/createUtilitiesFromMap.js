export default function createUtilitiesFromMap(
  map = {},
  generateDeclarations,
  prefix = ""
) {
  return Object.keys(map).reduce((utilities, key) => {
    const value = map[key]
    const label = Array.isArray(map) ? value : key
    return {
      ...utilities,
      [`${prefix}${
        label === "default" ? "" : `${prefix !== "" ? `-${label}` : label}`
      }`]: generateDeclarations(value),
    }
  }, {})
}
