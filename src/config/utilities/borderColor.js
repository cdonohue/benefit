import createUtilitiesFromMap from "../createUtilitiesFromMap"

export default function generate(theme) {
  return createUtilitiesFromMap(
    theme.borderColor,
    (value) => ({
      "border-color": value,
    }),
    "border"
  )
}
