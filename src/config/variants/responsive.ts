import createVariantsFromMap from "../createVariantsFromMap"

export default function generate(utilities: any, theme: any) {
  const { screens = {} } = theme

  return createVariantsFromMap(
    utilities,
    screens,
    (variantValue: string, declarations: string) => ({
      [`@media(min-width: ${variantValue})`]: declarations,
    })
  )
}
