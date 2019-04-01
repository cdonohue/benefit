import createUtilitiesFromMap from "../createUtilitiesFromMap"

export default function generate(theme) {
  return createUtilitiesFromMap(
    theme.stroke,
    (value) => ({
      stroke: value,
    }),
    "stroke"
  )
}
