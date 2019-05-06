test('"benefit" exports', () => {
  expect(Object.keys(require(".."))).toMatchInlineSnapshot(`
    Array [
      "benefit",
      "createUtilitiesFromMap",
      "createVariant",
      "createVariantsFromMap",
      "flattenColorConfig",
    ]
  `)
})

test('"benefit/react" exports', () => {
  expect(Object.keys(require("../react"))).toMatchInlineSnapshot(`
    Array [
      "benefit",
      "createUtilitiesFromMap",
      "createVariant",
      "createVariantsFromMap",
      "flattenColorConfig",
    ]
  `)
})
