import createUtilitiesFromMap from "../createUtilitiesFromMap"

export default function generate(theme) {
  return createUtilitiesFromMap(
    theme.backgroundPosition,
    (value) => ({
      "background-position": value,
    }),
    "bg"
  )
}
