function flattenColor(name, value) {
  if (typeof value !== "object") {
    return {
      [name]: value,
    }
  }

  return Object.keys(value).reduce(
    (colorVariants, colorVariation) => ({
      ...colorVariants,
      [`${name}-${colorVariation}`]: value[colorVariation],
    }),
    {}
  )
}

export default function flattenColorConfig(colorConfig) {
  return Object.keys(colorConfig).reduce(
    (colors, colorName) => ({
      ...colors,
      ...flattenColor(colorName, colorConfig[colorName]),
    }),
    {}
  )
}
