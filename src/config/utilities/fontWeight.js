import createUtilitiesFromMap from "../createUtilitiesFromMap"

export default function generate(theme) {
  return createUtilitiesFromMap(
    theme.fontWeight,
    (value) => ({
      "font-weight": value,
    }),
    "font"
  )
}
