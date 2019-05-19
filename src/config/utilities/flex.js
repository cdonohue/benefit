import createUtilitiesFromMap from "../createUtilitiesFromMap"

export default function generate(theme = {}) {
  const { flex = {}, order = {} } = theme

  return {
    ...createUtilitiesFromMap(
      flex,
      (value) => ({
        flex: value,
      }),
      "flex"
    ),

    ...createUtilitiesFromMap(
      order,
      (value) => ({
        order: value,
      }),
      "order"
    ),
  }
}
