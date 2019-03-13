import createUtilitiesFromMap from "../createUtilitiesFromMap"

export default function generate(theme) {
  return createUtilitiesFromMap(
    theme.flex,
    (value) => ({
      flex: value,
    }),
    "flex"
  )
}
