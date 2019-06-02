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
  const sortedUtilityClasses = Object.keys(utilityClasses).reduce(
    (map, key, i) => {
      map[key] = i
      return map
    },
    {}
  )

  const cssForUtility = (className, isImportant = false) =>
    parseDeclarations(utilityClasses[className], isImportant).join(" ")

  const getDeclarationsForClasses = (classNames = "", isImportant = false) => {
    const activeApply = classNames.split(" ").filter((name) => apply[name])

    const normalizeDeclarations = parseDeclarations(
      normalize(theme),
      isImportant
    ).join("")

    const classList = classNames
      .split(" ")
      .map((className) => className.trim())
      .filter(Boolean)
      .sort((a, b) => sortedUtilityClasses[a] - sortedUtilityClasses[b])

    for (let i = 0; i < activeApply.length; i++) {
      const applyClasses = apply[activeApply[i]]
      Array.prototype.push.apply(classList, applyClasses)
    }

    const ignoredClasses = []
    const activeDeclarations = []
    for (let i = 0; i < classList.length; i++) {
      const className = classList[i]

      if (utilityClasses[className]) {
        activeDeclarations.push(
          parseDeclarations(utilityClasses[className], isImportant).join("")
        )
      } else {
        ignoredClasses.push(className)
      }
    }

    return {
      declarations: [normalizeDeclarations, ...activeDeclarations],
      ignoredClasses,
    }
  }

  const styleWith = (classNames = "", isImportant = false) => {
    const { declarations, ignoredClasses } = getDeclarationsForClasses(
      classNames,
      isImportant
    )

    return [
      ...declarations.map(
        (declaration) =>
          css`
            ${declaration}
          `
      ),
      ...ignoredClasses,
    ].join(" ")
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
    getDeclarationsForClasses,
    styleWith,
  }
}
