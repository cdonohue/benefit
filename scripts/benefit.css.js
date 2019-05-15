#!/usr/bin/env node

const { writeFileSync } = require("fs")
const { resolve } = require("path")

const { cssForUtility, utilities } = require("../dist/benefit")()

const css = Object.keys(utilities)
  .sort((a, b) => {
    const [aString, aNumber] = a.split(/(\d+$)/)
    const [bString, bNumber] = b.split(/(\d+$)/)

    return aString.localeCompare(bString) || aNumber - bNumber
  })
  .map((utility) => {
    return `.${utility} { ${cssForUtility(utility)} }`
  })
  .join("\n")
  .concat("\n")

writeFileSync(resolve(__dirname, "../dist/benefit.css"), css)
