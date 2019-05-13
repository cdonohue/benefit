import createUtilitiesFromMap from "../createUtilitiesFromMap"
import flattenColorConfig from "../flattenColorConfig"

export default function generate(theme = {}) {
  const { textColor = {} } = theme
  return createUtilitiesFromMap(
    flattenColorConfig(textColor),
    (value) => ({
      color: value,
    }),
    "text"
  )
}
