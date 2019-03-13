import createVariantsFromMap from "../createVariantsFromMap"

export default function generate(utilities, theme) {
  return createVariantsFromMap(
    utilities,
    theme.screens,
    (variantValue, declarations) => ({
      [`@media(min-width: ${variantValue})`]: declarations,
    })
  )
}
