import createUtilitiesFromMap from "../createUtilitiesFromMap"

export default function generate(theme) {
  return createUtilitiesFromMap(
    theme.listStyleType,
    (value) => ({
      "list-style-type": value,
    }),
    "list"
  )
}
