import createUtilitiesFromMap from "../createUtilitiesFromMap"

export default function generate(theme: any) {
  const { boxShadow = {} } = theme
  return createUtilitiesFromMap(
    boxShadow,
    (value: string) => ({
      "box-shadow": value,
    }),
    "shadow"
  )
}
