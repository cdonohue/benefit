import createUtilitiesFromMap from "../createUtilitiesFromMap"

export default function generate(theme = {}) {
  const { borderRadius = {} } = theme
  return {
    ...createUtilitiesFromMap(
      borderRadius,
      (value) => ({
        "border-radius": value,
      }),
      "rounded"
    ),
    ...createUtilitiesFromMap(
      borderRadius,
      (value) => ({
        "border-top-left-radius": value,
        "border-top-right-radius": value,
      }),
      "rounded-t"
    ),
    ...createUtilitiesFromMap(
      borderRadius,
      (value) => ({
        "border-top-right-radius": value,
        "border-bottom-right-radius": value,
      }),
      "rounded-r"
    ),
    ...createUtilitiesFromMap(
      borderRadius,
      (value) => ({
        "border-bottom-right-radius": value,
        "border-bottom-left-radius": value,
      }),
      "rounded-b"
    ),
    ...createUtilitiesFromMap(
      borderRadius,
      (value) => ({
        "border-bottom-left-radius": value,
        "border-top-left-radius": value,
      }),
      "rounded-l"
    ),
    ...createUtilitiesFromMap(
      borderRadius,
      (value) => ({
        "border-top-left-radius": value,
      }),
      "rounded-tl"
    ),
    ...createUtilitiesFromMap(
      borderRadius,
      (value) => ({
        "border-top-right-radius": value,
      }),
      "rounded-tr"
    ),
    ...createUtilitiesFromMap(
      borderRadius,
      (value) => ({
        "border-bottom-right-radius": value,
      }),
      "rounded-br"
    ),
    ...createUtilitiesFromMap(
      borderRadius,
      (value) => ({
        "border-bottom-left-radius": value,
      }),
      "rounded-bl"
    ),
  }
}
