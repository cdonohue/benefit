import createUtilitiesFromMap from "../createUtilitiesFromMap"

export default function generate(theme = {}) {
  const { fontFamily = {} } = theme
  return createUtilitiesFromMap(
    fontFamily,
    (value) => ({
      "font-family": value.join(","),
    }),
    "font"
  )
}
