import createUtilitiesFromMap from "../createUtilitiesFromMap"

export default function generate(theme) {
  const { inset } = theme

  return {
    static: { position: "static" },
    fixed: { position: "fixed" },
    absolute: { position: "absolute" },
    relative: { position: "relative" },
    sticky: { position: "sticky" },
    ...createUtilitiesFromMap(
      inset,
      (value) => ({ top: value, right: value, bottom: value, left: value }),
      "inset"
    ),
    ...createUtilitiesFromMap(
      inset,
      (value) => ({ right: value, left: value }),
      "inset-x"
    ),
    ...createUtilitiesFromMap(
      inset,
      (value) => ({ top: value, bottom: value }),
      "inset-y"
    ),
    ...createUtilitiesFromMap(inset, (value) => ({ top: value }), "top"),
    ...createUtilitiesFromMap(inset, (value) => ({ right: value }), "right"),
    ...createUtilitiesFromMap(inset, (value) => ({ bottom: value }), "bottom"),
    ...createUtilitiesFromMap(inset, (value) => ({ left: value }), "left"),
  }
}
