import createUtilitiesFromMap from "../createUtilitiesFromMap"

export default function generate() {
  return createUtilitiesFromMap(
    ["contain", "cover", "fill", "none", "scale-down"],
    (value: string) => ({
      "object-fit": value,
    }),
    "object"
  )
}
