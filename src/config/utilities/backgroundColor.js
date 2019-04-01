import createUtilitiesFromMap from "../createUtilitiesFromMap"
import flattenColorConfig from "../flattenColorConfig"

export default function generate(theme) {
  return createUtilitiesFromMap(
    flattenColorConfig(theme.backgroundColor),
    (value) => ({
      "background-color": value,
    }),
    "bg"
  )
}
