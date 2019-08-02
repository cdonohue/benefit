import createUtilitiesFromMap from "../createUtilitiesFromMap"

export default function generate(theme: any) {
  const { listStyleType = {} } = theme
  return createUtilitiesFromMap(
    listStyleType,
    (value: string) => ({
      "list-style-type": value,
    }),
    "list"
  )
}
