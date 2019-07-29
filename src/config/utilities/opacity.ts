import createUtilitiesFromMap from "../createUtilitiesFromMap"

export default function generate(theme: any) {
  const { opacity = {} } = theme
  return createUtilitiesFromMap(
    opacity,
    (value: string) => ({
      opacity: value,
    }),
    "opacity"
  )
}
