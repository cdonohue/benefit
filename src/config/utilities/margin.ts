import createUtilitiesFromMap from "../createUtilitiesFromMap"

export default function generate(theme: any) {
  const { margin = {}, negativeMargin = {} } = theme
  return {
    ...createUtilitiesFromMap(
      margin,
      (value: string) => ({
        margin: value,
      }),
      "m"
    ),
    ...createUtilitiesFromMap(
      margin,
      (value: string) => ({
        "margin-left": value,
        "margin-right": value,
      }),
      "mx"
    ),
    ...createUtilitiesFromMap(
      margin,
      (value: string) => ({
        "margin-top": value,
        "margin-bottom": value,
      }),
      "my"
    ),
    ...createUtilitiesFromMap(
      margin,
      (value: string) => ({
        "margin-top": value,
      }),
      "mt"
    ),
    ...createUtilitiesFromMap(
      margin,
      (value: string) => ({
        "margin-right": value,
      }),
      "mr"
    ),
    ...createUtilitiesFromMap(
      margin,
      (value: string) => ({
        "margin-bottom": value,
      }),
      "mb"
    ),
    ...createUtilitiesFromMap(
      margin,
      (value: string) => ({
        "margin-left": value,
      }),
      "ml"
    ),
    ...createUtilitiesFromMap(
      negativeMargin,
      (value: string) => ({
        margin: `-${value}`,
      }),
      "-m"
    ),
    ...createUtilitiesFromMap(
      negativeMargin,
      (value: string) => ({
        "margin-left": `-${value}`,
        "margin-right": `-${value}`,
      }),
      "-mx"
    ),
    ...createUtilitiesFromMap(
      negativeMargin,
      (value: string) => ({
        "margin-top": `-${value}`,
        "margin-bottom": `-${value}`,
      }),
      "-my"
    ),
    ...createUtilitiesFromMap(
      negativeMargin,
      (value: string) => ({
        "margin-top": `-${value}`,
      }),
      "-mt"
    ),
    ...createUtilitiesFromMap(
      negativeMargin,
      (value: string) => ({
        "margin-right": `-${value}`,
      }),
      "-mr"
    ),
    ...createUtilitiesFromMap(
      negativeMargin,
      (value: string) => ({
        "margin-bottom": `-${value}`,
      }),
      "-mb"
    ),
    ...createUtilitiesFromMap(
      negativeMargin,
      (value: string) => ({
        "margin-left": `-${value}`,
      }),
      "-ml"
    ),
  }
}
