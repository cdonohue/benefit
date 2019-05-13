import createUtilitiesFromMap from "../createUtilitiesFromMap"

export default function generate(theme = {}) {
  const { listStyleType = {} } = theme
  return createUtilitiesFromMap(
    listStyleType,
    (value) => ({
      "list-style-type": value,
    }),
    "list"
  )
}
