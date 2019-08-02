import createUtilitiesFromMap from "../createUtilitiesFromMap"

export default function generate(theme: any) {
  const { inset } = theme

  return {
    static: { position: "static" },
    fixed: { position: "fixed" },
    absolute: { position: "absolute" },
    relative: { position: "relative" },
    sticky: { position: "sticky" },
    ...createUtilitiesFromMap(
      inset,
      (value: string) => ({
        top: value,
        right: value,
        bottom: value,
        left: value,
      }),
      "inset"
    ),
    ...createUtilitiesFromMap(
      inset,
      (value: string) => ({ right: value, left: value }),
      "inset-x"
    ),
    ...createUtilitiesFromMap(
      inset,
      (value: string) => ({ top: value, bottom: value }),
      "inset-y"
    ),
    ...createUtilitiesFromMap(
      inset,
      (value: string) => ({ top: value }),
      "top"
    ),
    ...createUtilitiesFromMap(
      inset,
      (value: string) => ({ right: value }),
      "right"
    ),
    ...createUtilitiesFromMap(
      inset,
      (value: string) => ({ bottom: value }),
      "bottom"
    ),
    ...createUtilitiesFromMap(
      inset,
      (value: string) => ({ left: value }),
      "left"
    ),
  }
}
