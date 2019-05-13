import createUtilitiesFromMap from "../createUtilitiesFromMap"

export default function generate(theme = {}) {
  const { fontWeight = {} } = theme
  return createUtilitiesFromMap(
    fontWeight,
    (value) => ({
      "font-weight": value,
    }),
    "font"
  )
}
