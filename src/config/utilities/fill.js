import createUtilitiesFromMap from "../createUtilitiesFromMap"

export default function generate(theme = {}) {
  const { fill = {} } = theme
  return createUtilitiesFromMap(fill, (value) => ({ fill: value }), "fill")
}
