import createUtilitiesFromMap from "../createUtilitiesFromMap"

export default function generate(theme) {
  return {
    ...createUtilitiesFromMap(
      theme.margin,
      (value) => ({
        margin: value,
      }),
      "m"
    ),
    ...createUtilitiesFromMap(
      theme.margin,
      (value) => ({
        "margin-left": value,
        "margin-right": value,
      }),
      "mx"
    ),
    ...createUtilitiesFromMap(
      theme.margin,
      (value) => ({
        "margin-top": value,
        "margin-bottom": value,
      }),
      "my"
    ),
    ...createUtilitiesFromMap(
      theme.margin,
      (value) => ({
        "margin-top": value,
      }),
      "mt"
    ),
    ...createUtilitiesFromMap(
      theme.margin,
      (value) => ({
        "margin-right": value,
      }),
      "mr"
    ),
    ...createUtilitiesFromMap(
      theme.margin,
      (value) => ({
        "margin-bottom": value,
      }),
      "mb"
    ),
    ...createUtilitiesFromMap(
      theme.margin,
      (value) => ({
        "margin-left": value,
      }),
      "ml"
    ),
    ...createUtilitiesFromMap(
      theme.negativeMargin,
      (value) => ({
        margin: `-${value}`,
      }),
      "-m"
    ),
    ...createUtilitiesFromMap(
      theme.negativeMargin,
      (value) => ({
        "margin-left": `-${value}`,
        "margin-right": `-${value}`,
      }),
      "-mx"
    ),
    ...createUtilitiesFromMap(
      theme.negativeMargin,
      (value) => ({
        "margin-top": `-${value}`,
        "margin-bottom": `-${value}`,
      }),
      "-my"
    ),
    ...createUtilitiesFromMap(
      theme.negativeMargin,
      (value) => ({
        "margin-top": `-${value}`,
      }),
      "-mt"
    ),
    ...createUtilitiesFromMap(
      theme.negativeMargin,
      (value) => ({
        "margin-right": `-${value}`,
      }),
      "-mr"
    ),
    ...createUtilitiesFromMap(
      theme.negativeMargin,
      (value) => ({
        "margin-bottom": `-${value}`,
      }),
      "-mb"
    ),
    ...createUtilitiesFromMap(
      theme.negativeMargin,
      (value) => ({
        "margin-left": `-${value}`,
      }),
      "-ml"
    ),
  }
}
