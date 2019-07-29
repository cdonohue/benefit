import createUtilitiesFromMap from "../createUtilitiesFromMap"

export default function generate(theme: any) {
  const { backgroundPosition = {} } = theme
  return createUtilitiesFromMap(
    backgroundPosition,
    (value: string) => ({
      "background-position": value,
    }),
    "bg"
  )
}
