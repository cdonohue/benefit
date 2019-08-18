import createUtilitiesFromMap from "../createUtilitiesFromMap"

export default function generate(theme: any) {
  const { fill = {} } = theme
  return createUtilitiesFromMap(
    fill,
    (value: string) => ({ fill: value }),
    "fill"
  )
}
