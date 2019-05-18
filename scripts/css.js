#!/usr/bin/env node

const { readFileSync, writeFileSync } = require("fs")
const { resolve } = require("path")

const benefit = require("../dist/benefit")()

// normalize.css + Tailwind's preflight for compatability
const base = readFileSync(require.resolve("tailwindcss/dist/base.css"), "utf8")

// Benefit's utility CSS
const utilities = Object.keys(benefit.utilities)
  .sort((a, b) => {
    const [aString, aNumber] = a.split(/(\d+$)/)
    const [bString, bNumber] = b.split(/(\d+$)/)

    return aString.localeCompare(bString) || aNumber - bNumber
  })
  .map((utility) => {
    return `.${utility} { ${benefit.cssForUtility(utility)} }`
  })
  .join("\n")
  .concat("\n")

const outputDir = resolve(__dirname, "../dist")

console.info("> ")
writeFileSync(resolve(outputDir, "benefit.css"), [base, utilities].join("\n"))

writeFileSync(resolve(outputDir, "utilities.css"), utilities)
