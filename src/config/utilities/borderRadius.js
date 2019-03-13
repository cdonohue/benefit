import createUtilitiesFromMap from "../createUtilitiesFromMap"

export default function generate(theme) {
  return {
    ...createUtilitiesFromMap(
      theme.borderRadius,
      (value) => ({
        "border-radius": value,
      }),
      "rounded"
    ),
    ...createUtilitiesFromMap(
      theme.borderRadius,
      (value) => ({
        "border-top-left-radius": value,
        "border-top-right-radius": value,
      }),
      "rounded-t"
    ),
    ...createUtilitiesFromMap(
      theme.borderRadius,
      (value) => ({
        "border-top-right-radius": value,
        "border-bottom-right-radius": value,
      }),
      "rounded-r"
    ),
    ...createUtilitiesFromMap(
      theme.borderRadius,
      (value) => ({
        "border-bottom-right-radius": value,
        "border-bottom-left-radius": value,
      }),
      "rounded-b"
    ),
    ...createUtilitiesFromMap(
      theme.borderRadius,
      (value) => ({
        "border-bottom-left-radius": value,
        "border-top-left-radius": value,
      }),
      "rounded-l"
    ),
    ...createUtilitiesFromMap(
      theme.borderRadius,
      (value) => ({
        "border-top-left-radius": value,
      }),
      "rounded-tl"
    ),
    ...createUtilitiesFromMap(
      theme.borderRadius,
      (value) => ({
        "border-top-right-radius": value,
      }),
      "rounded-tr"
    ),
    ...createUtilitiesFromMap(
      theme.borderRadius,
      (value) => ({
        "border-bottom-right-radius": value,
      }),
      "rounded-br"
    ),
    ...createUtilitiesFromMap(
      theme.borderRadius,
      (value) => ({
        "border-bottom-left-radius": value,
      }),
      "rounded-bl"
    ),
  }
}
