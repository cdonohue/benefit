const snapshotDiff = require("snapshot-diff")

const findCssRules = () => {
  const styleSheet = document.styleSheets[0]

  if (!styleSheet) {
    throw new Error("document.styleSheets is empty")
  }

  const cssRules = Array.from(styleSheet.cssRules)
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

let benefitRules = {}
let tailwindRules = {}

beforeAll(async () => {
  const benefitPage = await browser.newPage()
  const tailwindPage = await browser.newPage()

  await benefitPage.addStyleTag({ path: "dist/utilities.css" })
  await tailwindPage.addStyleTag({
    path: "node_modules/tailwindcss/dist/utilities.css",
  })

  benefitRules = await benefitPage.evaluate(findCssRules)
  tailwindRules = await tailwindPage.evaluate(findCssRules)
})

describe("benefit/utilities.css", () => {
  it("should match snapshot", async () => {
    expect(benefitRules).toMatchSnapshot()
  })
})

describe("tailwindcss/dist/utilities.css", () => {
  it("should match snapshot", async () => {
    expect(tailwindRules).toMatchSnapshot()
  })

  it("should exist in benefit", () => {
    const missing = Object.keys(tailwindRules).filter(
      (className) => !benefitRules[className]
    )

    expect(missing).toHaveLength(0)
  })

  it("should be the same values in benefit", () => {
    const matchingBenefitRules = {}
    const matchingTailwindRules = {}

    Object.keys(tailwindRules).forEach((className) => {
      if (benefitRules[className]) {
        matchingBenefitRules[className] = benefitRules[className]
        matchingTailwindRules[className] = tailwindRules[className]
      }
    })

    const diff = snapshotDiff(matchingTailwindRules, matchingBenefitRules)

    expect(diff).toMatchInlineSnapshot(`

        "Snapshot Diff:
        Compared values have no visual difference."
      `)
  })
})
