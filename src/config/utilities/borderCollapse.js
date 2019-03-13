import createUtilitiesFromMap from "../createUtilitiesFromMap"

export default function generate() {
  return createUtilitiesFromMap(
    ["collapse", "separate"],
    (value) => ({
      "border-collapse": value,
    }),
    "border"
  )
}
