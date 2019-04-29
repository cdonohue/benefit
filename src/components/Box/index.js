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

function getActiveUtilities(classList, utilities, apply) {
  const activeApply = classList.split(" ").filter((name) => apply[name])

  return classList
    .split(" ")
    .filter((name) => utilities[name])
    .concat(
      activeApply.reduce(
        (allApply, composite) => allApply.concat(apply[composite]),
        []
      )
    )
}

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
        const { theme = {}, apply = {}, reset = () => ({}) } = config
        // Get default reset
        const resetStyles = reset(theme)
        const defaultReset = parseDeclarations(
          resetStyles.default,
          important
        ).join("")
        // Get element reset
        const elementReset = parseDeclarations(resetStyles[is], important).join(
          ""
        )

        // Get array of active modifiers
        const activeUtilities = getActiveUtilities(className, utilities, apply)

        const classList = className
          .split(" ")
          .filter((className) => activeUtilities.indexOf(className) === -1)
          .join(" ")

        const activeUtilityRules = activeUtilities.map((name) =>
          parseDeclarations(utilities[name], important).join("")
        )

        // Single out the base reset
        const defaultResetClass = css`
          ${defaultReset}
        `

        // Single out the element reset
        const elementResetClass = css`
          ${elementReset}
        `

        // Single out each of the modifiers
        const activeUtilityClasses = activeUtilityRules.map(
          (rules) =>
            css`
              ${rules}
            `
        )

        remainingProps.className = `${defaultResetClass} ${elementResetClass} ${activeUtilityClasses.join(
          " "
        )} ${classList}`.trim()

        return React.createElement(is, remainingProps, children)
      }}
    </ConfigConsumer>
  )
}

export default Box
