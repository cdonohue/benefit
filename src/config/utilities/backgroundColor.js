import createUtilitiesFromMap from "../createUtilitiesFromMap"
import flattenColorConfig from "../flattenColorConfig"

export default function generate(theme = {}) {
  const { backgroundColor = {} } = theme
  return createUtilitiesFromMap(
    flattenColorConfig(backgroundColor),
    (value) => ({
      "background-color": value,
    }),
    "bg"
  )
}
