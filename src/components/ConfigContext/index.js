import React from "react"
import createUtilitiesFromConfig from "../../initialization/createUtilitiesFromConfig"

const configuredUtilities = createUtilitiesFromConfig()

const ConfigContext = React.createContext({
  ...configuredUtilities,
})

export class ConfigProvider extends React.Component {
  state = {
    ...configuredUtilities,
  }

  componentDidMount() {
    const { config: configFn } = this.props

    const {
      config,
      utilities,
      getDeclarationsForClasses,
    } = createUtilitiesFromConfig(configFn)

    this.setState({
      config,
      utilities,
      getDeclarationsForClasses,
    })
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
