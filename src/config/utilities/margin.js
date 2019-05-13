import createUtilitiesFromMap from "../createUtilitiesFromMap"

export default function generate(theme = {}) {
  const { margin = {}, negativeMargin = {} } = theme
  return {
    ...createUtilitiesFromMap(
      margin,
      (value) => ({
        margin: value,
      }),
      "m"
    ),
    ...createUtilitiesFromMap(
      margin,
      (value) => ({
        "margin-left": value,
        "margin-right": value,
      }),
      "mx"
    ),
    ...createUtilitiesFromMap(
      margin,
      (value) => ({
        "margin-top": value,
        "margin-bottom": value,
      }),
      "my"
    ),
    ...createUtilitiesFromMap(
      margin,
      (value) => ({
        "margin-top": value,
      }),
      "mt"
    ),
    ...createUtilitiesFromMap(
      margin,
      (value) => ({
        "margin-right": value,
      }),
      "mr"
    ),
    ...createUtilitiesFromMap(
      margin,
      (value) => ({
        "margin-bottom": value,
      }),
      "mb"
    ),
    ...createUtilitiesFromMap(
      margin,
      (value) => ({
        "margin-left": value,
      }),
      "ml"
    ),
    ...createUtilitiesFromMap(
      negativeMargin,
      (value) => ({
        margin: `-${value}`,
      }),
      "-m"
    ),
    ...createUtilitiesFromMap(
      negativeMargin,
      (value) => ({
        "margin-left": `-${value}`,
        "margin-right": `-${value}`,
      }),
      "-mx"
    ),
    ...createUtilitiesFromMap(
      negativeMargin,
      (value) => ({
        "margin-top": `-${value}`,
        "margin-bottom": `-${value}`,
      }),
      "-my"
    ),
    ...createUtilitiesFromMap(
      negativeMargin,
      (value) => ({
        "margin-top": `-${value}`,
      }),
      "-mt"
    ),
    ...createUtilitiesFromMap(
      negativeMargin,
      (value) => ({
        "margin-right": `-${value}`,
      }),
      "-mr"
    ),
    ...createUtilitiesFromMap(
      negativeMargin,
      (value) => ({
        "margin-bottom": `-${value}`,
      }),
      "-mb"
    ),
    ...createUtilitiesFromMap(
      negativeMargin,
      (value) => ({
        "margin-left": `-${value}`,
      }),
      "-ml"
    ),
  }
}
