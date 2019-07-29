import createUtilitiesFromMap from "../createUtilitiesFromMap"

export default function generate(theme: any) {
  const { flex = {}, order = {} } = theme

  return {
    ...createUtilitiesFromMap(
      flex,
      (value: string) => ({
        flex: value,
      }),
      "flex"
    ),

    ...createUtilitiesFromMap(
      order,
      (value: string) => ({
        order: value,
      }),
      "order"
    ),
  }
}
