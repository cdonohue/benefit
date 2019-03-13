import React from "react"

import defaultConfig from "../../config/defaultConfig"

function createUtilityMap(allUtilities = [], theme) {
  return allUtilities
    .map((utilityFn) => utilityFn(theme))
    .reduce((allRules, utility) => ({ ...allRules, ...utility }), {})
}

function createVariantMap(allVariants = [], utilityMap = {}, theme) {
  return allVariants
    .map((variantFn) => variantFn(utilityMap, theme))
    .reduce((allRules, variant) => ({ ...allRules, ...variant }), {})
}

const { theme, utilities, variants } = defaultConfig

const defaultUtilities = createUtilityMap(utilities, theme)
const defaultVariants = createVariantMap(variants, defaultUtilities, theme)

const ConfigContext = React.createContext({
  config: defaultConfig,
  utilities: {
    ...defaultUtilities,
    ...defaultVariants,
  },
})

export class ConfigProvider extends React.Component {
  state = {
    config: defaultConfig,
    utilities: {
      ...defaultUtilities,
      ...defaultVariants,
    },
  }

  componentDidMount() {
    const { config } = this.props

    if (config) {
      const providedConfig = config(defaultConfig)

      const { theme, utilities = [], variants = [] } = providedConfig

      const providedUtilities = createUtilityMap(utilities, theme)

      const providedVariants = createVariantMap(
        variants,
        providedUtilities,
        theme
      )

      this.setState({
        config: providedConfig,
        utilities: {
          ...providedUtilities,
          ...providedVariants,
        },
      })
    }
  }

  render() {
    const { children } = this.props

    return (
      <ConfigContext.Provider value={this.state}>
        {children}
      </ConfigContext.Provider>
    )
  }
}

export const ConfigConsumer = ConfigContext.Consumer
