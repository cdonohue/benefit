import createUtilitiesFromMap from "../createUtilitiesFromMap"
import flattenColorConfig from "../flattenColorConfig"

export default function generate(theme: any) {
  const { backgroundColor = {} } = theme
  return createUtilitiesFromMap(
    flattenColorConfig(backgroundColor),
    (value: string) => ({
      "background-color": value,
    }),
    "bg"
  )
}
