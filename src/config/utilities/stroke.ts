import createUtilitiesFromMap from "../createUtilitiesFromMap"

export default function generate(theme: any) {
  const { stroke = {} } = theme
  return createUtilitiesFromMap(
    stroke,
    (value: string) => ({
      stroke: value,
    }),
    "stroke"
  )
}
