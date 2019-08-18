import createUtilitiesFromMap from "../createUtilitiesFromMap"

const borderStyles = ["solid", "dashed", "dotted", "none"]

export default function generate() {
  return createUtilitiesFromMap(
    borderStyles,
    (value: string) => ({
      "border-style": value,
    }),
    "border"
  )
}
