import createUtilitiesFromMap from "../createUtilitiesFromMap"

export default function generate(theme) {
  return createUtilitiesFromMap(
    theme.boxShadow,
    (value) => ({
      "box-shadow": value,
    }),
    "shadow"
  )
}
