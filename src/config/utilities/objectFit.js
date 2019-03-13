import createUtilitiesFromMap from "../createUtilitiesFromMap"

export default function generate() {
  return createUtilitiesFromMap(
    ["contain", "cover", "fill", "none", "scale-down"],
    (value) => ({
      "object-fit": value,
    }),
    "object"
  )
}
