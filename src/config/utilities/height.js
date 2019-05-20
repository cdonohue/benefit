import createUtilitiesFromMap from "../createUtilitiesFromMap"

export default function generate(theme = {}) {
  const { height = {}, maxHeight = {}, minHeight = {} } = theme
  return {
    ...createUtilitiesFromMap(
      height,
      (value) => ({
        height: value,
      }),
      "h"
    ),
    ...createUtilitiesFromMap(
      maxHeight,
      (value) => ({
        "max-height": value,
      }),
      "max-h"
    ),
    ...createUtilitiesFromMap(
      minHeight,
      (value) => ({
        "min-height": value,
      }),
      "min-h"
    ),
  }
}
