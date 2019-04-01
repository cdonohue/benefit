import createUtilitiesFromMap from "../createUtilitiesFromMap"
import flattenColorConfig from "../flattenColorConfig"

export default function generate(theme) {
  return createUtilitiesFromMap(
    flattenColorConfig(theme.borderColor),
    (value) => ({
      "border-color": value,
    }),
    "border"
  )
}
