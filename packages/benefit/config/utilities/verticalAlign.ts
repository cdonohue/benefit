import createUtilitiesFromMap from "../createUtilitiesFromMap"

export default function generate() {
  return createUtilitiesFromMap(
    ["baseline", "top", "middle", "bottom", "text-top", "text-bottom"],
    (value: string) => ({
      "vertical-align": value,
    }),
    "align"
  )
}
