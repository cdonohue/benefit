#!/usr/bin/env node

const emotion = require("emotion")
const { readFileSync, writeFileSync } = require("fs")
const { resolve } = require("path")

const benefit = require("../dist/benefit")()

// normalize.css + Tailwind's preflight for compatability
const base = readFileSync(require.resolve("tailwindcss/dist/base.css"), "utf8")

// Benefit's utility CSS
const utilities = Object.keys(benefit.utilities)
  .map((utility) => {
    // Call `styleWith` as if it was being used & extract the non-reset class
    // (e.g. `css-1234`)
    const emotionclassName = benefit
      .styleWith(utility)
      .split(" ")
      .pop()

    // Remove the `css-` prefix
    // (e.g. `1234`)
    const [, hash] = emotionclassName.split("-")

    // Get the rule as it would be inserted
    // e.g. css-1234:hover{opacity:0;}
    const inserted = emotion.cache.inserted[hash]

    // Replae `css-1234` with `hover:opacity-0`
    return inserted.replace(
      emotionclassName,
      utility.replace(":", "\\:").replace("/", "\\/")
    )
  })
  .join("\n")
  .concat("\n")

const outputDir = resolve(__dirname, "../dist")

console.info(`> Output ${resolve(outputDir, "base.css")}`)
writeFileSync(resolve(outputDir, "base.css"), base)

console.info(`> Output ${resolve(outputDir, "utilities.css")}`)
writeFileSync(resolve(outputDir, "utilities.css"), utilities)

console.info(`> Output ${resolve(outputDir, "benefit.css")}`)
writeFileSync(resolve(outputDir, "benefit.css"), [base, utilities].join("\n"))
