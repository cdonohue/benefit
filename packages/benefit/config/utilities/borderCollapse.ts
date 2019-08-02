import createUtilitiesFromMap from "../createUtilitiesFromMap"

export default function generate() {
  return createUtilitiesFromMap(
    ["collapse", "separate"],
    (value: string) => ({
      "border-collapse": value,
    }),
    "border"
  )
}
