import createUtilitiesFromMap from "../createUtilitiesFromMap"

export default function generate(theme: any) {
  const { backgroundSize } = theme
  return createUtilitiesFromMap(
    backgroundSize,
    (value: string) => ({
      "background-size": value,
    }),
    "bg"
  )
}
