function flattenColor(name: any, value: any) {
  if (typeof value !== "object") {
    return {
      [name]: value,
    }
  }

  return Object.keys(value).reduce(
    (colorVariants, colorVariation) => ({
      ...colorVariants,
      [`${name}${
        colorVariation !== "default" ? `-${colorVariation}` : ""
      }`]: value[colorVariation],
    }),
    {}
  )
}

export default function flattenColorConfig(colorConfig: any = {}) {
  return Object.keys(colorConfig).reduce(
    (colors, colorName) => ({
      ...colors,
      ...flattenColor(colorName, colorConfig[colorName]),
    }),
    {}
  )
}
