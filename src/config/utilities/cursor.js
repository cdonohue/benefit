import createUtilitiesFromMap from "../createUtilitiesFromMap"

export default function generate(theme) {
  return createUtilitiesFromMap(
    theme.cursor,
    (value) => ({
      cursor: value,
    }),
    "cursor"
  )
}
