import React from "react"
import createUtilitiesFromConfig from "../../createUtilitiesFromConfig"

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
      styleWith,
      getDeclarationsForClasses,
    } = createUtilitiesFromConfig(configFn)

    this.setState({
      config,
      utilities,
      styleWith,
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
