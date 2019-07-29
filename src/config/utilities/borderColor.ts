import createUtilitiesFromMap from "../createUtilitiesFromMap"
import flattenColorConfig from "../flattenColorConfig"

export default function generate(theme: any) {
  const { borderColor = {} } = theme
  return createUtilitiesFromMap(
    flattenColorConfig(borderColor),
    (value: string) => ({
      "border-color": value,
    }),
    "border"
  )
}
