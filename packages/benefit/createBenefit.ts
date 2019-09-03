import defaultConfig from "./config/defaultConfig"
import createUtilityMap from "./util/createUtilityMap"
import createVariantMap from "./util/createVariantMap"
import parseDeclarations from "./util/parseDeclarations"
import getProcessedRules from "./util/getProcessedRules"
import createHash from "./util/createHash"
import registry from "./util/registry"
import insertStyle from "./util/insertStyle"
import { preflightDeclarations } from "./util/preflight"

interface Options {
  prefix?: string
  injectPreflight?: boolean
  theme?: { [key: string]: any }
  normalize?: (theme?: { [key: string]: any }) => { [key: string]: any }
  utilities?: Array<(theme?: { [key: string]: any }) => { [key: string]: any }>
  variants?: any
  apply?: any
}

export default function createBenefit(
  configFn: (defaultConfig?: Options) => Options = () => defaultConfig
): {
  config: any
  cssForUtility: any
  getDeclarationsForClasses: any
  benefitRegistry: any
  styleWith: any
  utilities: any
} {
  const benefitRegistry = registry.getInstance()
  benefitRegistry.addListener(insertStyle)

  // const isDevMode = process.env.NODE_ENV === "development"
  const config = configFn(defaultConfig)

  const {
    prefix = "",
    injectPreflight = false,
    theme = {},
    utilities = [],
    variants = [],
    apply = {},
  } = config

  if (injectPreflight) {
    benefitRegistry.add("preflight", preflightDeclarations)
  }

  const generatedUtilities: any = createUtilityMap(utilities, theme)

  const generatedVariants: any = createVariantMap(
    variants,
    generatedUtilities,
    theme
  )

  const prefixStr = prefix ? `${prefix}-` : ""

  const utilityClasses: any = {}
  Object.keys(generatedUtilities).forEach(
    (key) => (utilityClasses[`${prefixStr}${key}`] = generatedUtilities[key])
  )
  Object.keys(generatedVariants).forEach(
    (key) => (utilityClasses[`${prefixStr}${key}`] = generatedVariants[key])
  )

  const cssForUtility = (className: string, isImportant: boolean = false) =>
    parseDeclarations(utilityClasses[className], isImportant).join(" ")

  // Not actually sorted, but we rely on the key order
  const sortedUtilityClasses = Object.keys(utilityClasses).reduce(
    (map: any, key, i) => {
      map[key] = i
      return map
    },
    {}
  )

  const getDeclarationsForClasses = (
    classNames: string = "",
    isImportant: boolean
  ) => {
    const activeApply = classNames.split(" ").filter((name) => apply[name])

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
        const rules = getProcessedRules(
          `.${className}`,
          parseDeclarations(utilityClasses[className], isImportant).join("")
        )

        activeDeclarations.push({
          index: sortedUtilityClasses[className],
          id: `benefit-utility-${createHash(rules)}`,
          className,
          rules,
        })
      } else {
        ignoredClasses.push(className)
      }
    }

    return {
      declarations: activeDeclarations,
      ignoredClasses,
    }
  }

  const styleWith = (
    classNames: string = "",
    isImportant: boolean = false
  ): string => {
    const { declarations, ignoredClasses } = getDeclarationsForClasses(
      classNames,
      isImportant
    )

    declarations.forEach((declaration) => {
      benefitRegistry.add("utilities", declaration)
    })

    return declarations
      .map((d) => d.className)
      .concat(ignoredClasses)
      .join(" ")
  }

  return {
    config,
    cssForUtility,
    benefitRegistry,
    getDeclarationsForClasses,
    styleWith,
    utilities: utilityClasses,
  }
}
