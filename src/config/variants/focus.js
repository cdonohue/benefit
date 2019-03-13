import createVariant from "../createVariant"

export default function generate(utilityMap) {
  return createVariant(
    utilityMap,
    (value) => ({
      "&:focus": value,
    }),
    "focus"
  )
}
