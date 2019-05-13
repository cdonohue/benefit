import createUtilitiesFromMap from "../createUtilitiesFromMap"

export default function generate(theme = {}) {
  const { cursor = {} } = theme
  return createUtilitiesFromMap(
    cursor,
    (value) => ({
      cursor: value,
    }),
    "cursor"
  )
}
