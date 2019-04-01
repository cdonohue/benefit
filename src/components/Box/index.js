import React from "react"
import { css } from "emotion"

import { ConfigConsumer } from "../ConfigContext"

function formatDeclaration(property, value, isImportant) {
  const declaration = `${property}: ${value}`
  return `${declaration}${isImportant ? " !important" : ""};`
}

function parseDeclarations(declarations = {}, isImportant = false) {
  return Object.keys(declarations).map((property) => {
    if (property.indexOf("&") > -1 || property.indexOf("@") > -1) {
      // Assume we have a nested selector
      const nestedDeclarations = parseDeclarations(
        declarations[property],
        isImportant
      )

      return `${property} { ${nestedDeclarations.join("")} }`
    }

    return formatDeclaration(property, declarations[property], isImportant)
  })
}

function getActiveUtilities(classList, utilities, composites) {
  const activeComposites = classList
    .split(" ")
    .filter((name) => composites[name])

  return classList
    .split(" ")
    .filter((name) => utilities[name])
    .concat(
      activeComposites.reduce(
        (allComposites, composite) =>
          allComposites.concat(composites[composite]),
        []
      )
    )
}

// https://images.unsplash.com/photo-1537815749002-de6a533c64db?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1690&q=80

function Box(props) {
  const {
    children,
    className = "",
    important,
    is = "div",
    ...remainingProps
  } = props

  return (
    <ConfigConsumer>
      {({ config, utilities }) => {
        const { theme = {}, composites = {}, reset = () => ({}) } = config
        // Get base reset
        const { base } = reset(theme)
        const baseReset = parseDeclarations(base, important).join("")

        // Get array of active modifiers
        const activeUtilities = getActiveUtilities(
          className,
          utilities,
          composites
        )

        const classList = className
          .split(" ")
          .filter((className) => activeUtilities.indexOf(className) === -1)
          .join(" ")

        const activeUtilityRules = activeUtilities.map((name) =>
          parseDeclarations(utilities[name], important).join("")
        )

        // Single out the base reset
        const baseResetClass = css`
          ${baseReset}
        `

        // Single out each of the modifiers
        const activeUtilityClasses = activeUtilityRules.map(
          (rules) =>
            css`
              ${rules}
            `
        )

        remainingProps.className = `${baseResetClass} ${activeUtilityClasses.join(
          " "
        )} ${classList}`.trim()

        return React.createElement(is, remainingProps, children)
      }}
    </ConfigConsumer>
  )
}

export default Box
