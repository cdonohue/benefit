import defaultConfig from "../config/defaultConfig"
import createUtilityMap from "./createUtilityMap"
import createVariantMap from "./createVariantMap"
import parseDeclarations from "./parseDeclarations"

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

  return {
    config,
    cssForUtility,
    getDeclarationsForClasses,
    utilities: utilityClasses,
  }
}
