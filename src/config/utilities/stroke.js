import createUtilitiesFromMap from "../createUtilitiesFromMap"

export default function generate(theme = {}) {
  const { stroke = {} } = theme
  return createUtilitiesFromMap(
    stroke,
    (value) => ({
      stroke: value,
    }),
    "stroke"
  )
}
