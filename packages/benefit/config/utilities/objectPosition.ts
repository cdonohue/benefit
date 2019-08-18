import createUtilitiesFromMap from "../createUtilitiesFromMap"

export default function generate(theme: any) {
  const { objectPosition = {} } = theme
  return createUtilitiesFromMap(
    objectPosition,
    (value: string) => ({
      "object-position": value,
    }),
    "object"
  )
}
