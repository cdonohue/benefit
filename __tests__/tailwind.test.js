const findTailwindRules = () => {
  const tailwind = Array.from(document.styleSheets).find((styleSheet) =>
    styleSheet.href.includes("tailwind")
  )

  const cssRules = Array.from(tailwind.cssRules)
    .filter((cssRule) => {
      if (cssRule.type !== 1) {
        return false
      }

      if (!cssRule.selectorText.startsWith(".")) {
        return false
      }

      return true
    })
    .sort((a, b) => {
      const [aString, aNumber] = a.selectorText.split(/(\d+$)/)
      const [bString, bNumber] = b.selectorText.split(/(\d+$)/)

      return aString.localeCompare(bString) || aNumber - bNumber
    })
    .reduce((rules, cssRule) => {
      const selector = cssRule.selectorText.slice(1).replace("\\", "")
      const text = cssRule.style.cssText

      rules[selector] = text

      return rules
    }, {})

  return cssRules
}

describe("TailwindCSS", () => {
  let tailwindRules

  beforeAll(async () => {
    // Need to have crossorigin="anonymous" to pull rules
    await page.setContent(`
      <link
        crossorigin="anonymous"
        href="https://unpkg.com/tailwindcss/dist/utilities.min.css"
        rel="stylesheet"
      >
    `)

    tailwindRules = await page.evaluate(findTailwindRules)
  })

  it("should match snapshot", async () => {
    expect(tailwindRules).toMatchSnapshot()
  })
})
