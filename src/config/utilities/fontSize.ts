import createUtilitiesFromMap from "../createUtilitiesFromMap"

export default function generate(theme: any) {
  const { fontSize = {} } = theme
  return createUtilitiesFromMap(
    fontSize,
    (value: string) => ({ "font-size": value }),
    "text"
  )
}
