import createVariant from "../createVariant"

export default function generate(utilityMap) {
  return createVariant(
    utilityMap,
    (value) => ({
      "&:hover": value,
    }),
    "hover"
  )
}
