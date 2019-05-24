import { cx, css } from "emotion"
import defaultConfig from "./config/defaultConfig"

export function formatDeclaration(property, value, isImportant) {
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

function createUtilityMap(allUtilities = [], theme) {
  const map = {}
  for (let i = 0; i < allUtilities.length; i++) {
    const utilityFn = allUtilities[i]
    const rulesMap = utilityFn(theme) || {}

    Object.keys(rulesMap).forEach((key) => {
      map[key] = rulesMap[key]
    })
  }

  return map
}

function createVariantMap(allVariants = [], utilityMap = {}, theme) {
  const map = {}
  for (let i = 0; i < allVariants.length; i++) {
    const variantFn = allVariants[i]
    const rulesMap = variantFn(utilityMap, theme) || {}

    Object.keys(rulesMap).forEach((key) => {
      map[key] = rulesMap[key]
    })
  }

  return map
}

export default function createUtilitiesFromConfig(configFn = (cfg) => cfg) {
  const config = configFn(defaultConfig)

  const {
    prefix = "",
    theme = {},
    normalize = () => ({}),
    utilities = [],
    variants = [],
    apply = {},
  } = config

  const generatedUtilities = createUtilityMap(utilities, theme)

  const generatedVariants = createVariantMap(
    variants,
    generatedUtilities,
    theme
  )

  const prefixStr = prefix ? `${prefix}-` : ""

  const utilityClasses = {}
  Object.keys(generatedUtilities).forEach(
    (key) => (utilityClasses[`${prefixStr}${key}`] = generatedUtilities[key])
  )
  Object.keys(generatedVariants).forEach(
    (key) => (utilityClasses[`${prefixStr}${key}`] = generatedVariants[key])
  )

  // Not actually sorted, but we rely on the key order
  const sortedUtilityClasses = Object.keys(utilityClasses)

  const cssForUtility = (className, isImportant = false) => {
    return parseDeclarations(utilityClasses[className], isImportant).join(" ")
  }

  const styleWith = (classNames = "", isImportant = false) => {
    const activeApply = classNames.split(" ").filter((name) => apply[name])

    const normalizeClass = css`
      ${parseDeclarations(normalize(theme), isImportant).join("")}
    `

    const classList = classNames
      .split(" ")
      .map((className) => className.trim())
      .filter(Boolean)
      .sort((a, b) => {
        return sortedUtilityClasses.indexOf(a) - sortedUtilityClasses.indexOf(b)
      })

    for (let i = 0; i < activeApply.length; i++) {
      const applyClasses = apply[activeApply[i]]
      Array.prototype.push.apply(classList, applyClasses)
    }

    const ignoredClasses = []
    const activeUtilityClasses = []
    for (let i = 0; i < classList.length; i++) {
      const className = classList[i]

      if (utilityClasses[className]) {
        activeUtilityClasses.push(css`
          ${parseDeclarations(utilityClasses[className], isImportant).join("")}
        `)
      } else {
        ignoredClasses.push(className)
      }
    }

    return [normalizeClass, ...activeUtilityClasses, ...ignoredClasses].join(
      " "
    )
  }

  return {
    config,
    cssForUtility,
    cx(...args) {
      const appliedClasses = cx(...args)
      const styledClasses = styleWith(appliedClasses)

      return cx(styledClasses)
    },
    utilities: utilityClasses,
    styleWith,
  }
}
