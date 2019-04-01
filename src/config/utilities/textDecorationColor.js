import createUtilitiesFromMap from "../createUtilitiesFromMap"
import flattenColorConfig from "../flattenColorConfig"

export default function generate(theme) {
  return createUtilitiesFromMap(
    flattenColorConfig(theme.textColor),
    (value) => ({
      "text-decoration-color": value,
    }),
    "text-decoration"
  )
}
