import createUtilitiesFromMap from "../createUtilitiesFromMap"

export default function generate(theme) {
  return createUtilitiesFromMap(
    theme.backgroundColor,
    (value) => ({
      "background-color": value,
    }),
    "bg"
  )
}
