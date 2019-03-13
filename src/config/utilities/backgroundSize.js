import createUtilitiesFromMap from "../createUtilitiesFromMap"

export default function generate(theme) {
  return createUtilitiesFromMap(
    theme.backgroundSize,
    (value) => ({
      "background-size": value,
    }),
    "bg"
  )
}
