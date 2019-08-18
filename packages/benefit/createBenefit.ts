import defaultConfig from "./config/defaultConfig"
import createUtilityMap from "./util/createUtilityMap"
import createVariantMap from "./util/createVariantMap"
import parseDeclarations from "./util/parseDeclarations"
import getProcessedRules from "./util/getProcessedRules"
import createStyleTag from "./util/createStyleTag"
import createHash from "./util/createHash"
import { global } from "./util/css"
import getPreflightStyles from "./util/getPreflightStyles"
import createCache from "./util/createCache"
import initializeContainers from "./util/initializeContainers"

interface Options {
  prefix?: string
  preflight?: boolean
  theme?: { [key: string]: any }
  normalize?: (theme?: { [key: string]: any }) => { [key: string]: any }
  utilities?: Array<(theme?: { [key: string]: any }) => { [key: string]: any }>
  variants?: any
  apply?: any
}

export default function createBenefit(
  configFn: (defaultConfig?: Options) => Options = () => defaultConfig
) {
  const isBrowser = typeof window !== "undefined"
  // const isDevMode = process.env.NODE_ENV === "development"
  const config = configFn(defaultConfig)

  const {
    prefix = "",
    preflight = true,
    theme = {},
    utilities = [],
    variants = [],
    apply = {},
  } = config

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

  let cache: any

  if (isBrowser) {
    initializeContainers()

    if (preflight) {
      global`
        ${getPreflightStyles()}
      `
    }

    // const preloadedUtilities =
    //   process.env.NODE_ENV === "development"
    //     ? Object.keys(utilityClasses).map((className) => {
    //         return {
    //           index: Object.keys(sortedUtilityClasses[className]),
    //           className,
    //           rules: parseDeclarations(utilityClasses[className]).join(""),
    //         }
    //       })
    //     : []

    cache = createCache()
    // DEV ENVIRONMENT
    // if (process.env.NODE_ENV === "development") {
    //   const fragment = document.createDocumentFragment()

    //   cache.getUtilities().forEach((u: any) => {
    //     const utilityStyle = createStyleTag(
    //       u.className,
    //       getProcessedRules(`.${u.className}`, u.rules)
    //     )
    //     fragment.appendChild(utilityStyle)
    //   })

    //   container.appendChild(fragment)
    // }
  }

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
        const rules = parseDeclarations(
          utilityClasses[className],
          isImportant
        ).join("")

        activeDeclarations.push({
          index: sortedUtilityClasses[className],
          id: `benefit-${createHash(rules)}`,
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
      if (isBrowser) {
        const newUtilityIndex = cache.addUtility(declaration)
        const existingStyle = document.getElementById(declaration.id)

        if (newUtilityIndex > -1 && !existingStyle) {
          const stylesheetRule = getProcessedRules(
            `.${declaration.className}`,
            declaration.rules
          )

          const styleTag = createStyleTag(declaration.id, stylesheetRule, {
            label: "utility",
          })

          const addedStyles = document.querySelectorAll(
            "[data-benefit-utility]"
          )

          const container = document.getElementById("benefit-utilities")

          if (container) {
            container.insertBefore(styleTag, addedStyles[newUtilityIndex])
          }
        }
      }
    })

    return declarations
      .map((d) => d.className)
      .concat(ignoredClasses)
      .join(" ")
  }

  return {
    config,
    cssForUtility,
    getDeclarationsForClasses,
    styleWith,
    utilities: utilityClasses,
  }
}
