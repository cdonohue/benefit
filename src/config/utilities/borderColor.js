import createUtilitiesFromMap from "../createUtilitiesFromMap"
import flattenColorConfig from "../flattenColorConfig"

export default function generate(theme = {}) {
  const { borderColor = {} } = theme
  return createUtilitiesFromMap(
    flattenColorConfig(borderColor),
    (value) => ({
      "border-color": value,
    }),
    "border"
  )
}
