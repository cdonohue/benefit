import createUtilitiesFromMap from "../createUtilitiesFromMap"
import flattenColorConfig from "../flattenColorConfig"

export default function generate(theme: any) {
  const { textColor = {} } = theme
  return createUtilitiesFromMap(
    flattenColorConfig(textColor),
    (value: string) => ({
      color: value,
    }),
    "text"
  )
}
