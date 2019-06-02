const benefit = require("../dist/benefit")()

describe("benefit()", () => {
  it("should match snapshot of exports", async () => {
    expect(Object.keys(benefit)).toMatchInlineSnapshot(`
      Array [
        "config",
        "cssForUtility",
        "cx",
        "utilities",
        "getDeclarationsForClasses",
        "processDeclarations",
        "styleWith",
      ]
    `)
  })
})
