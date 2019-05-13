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
        height: value,
      }),
      "max-h"
    ),
    ...createUtilitiesFromMap(
      minHeight,
      (value) => ({
        height: value,
      }),
      "min-h"
    ),
  }
}
