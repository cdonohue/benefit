import React from "react"
import { createBenefit } from "benefit"

export interface Config {
  prefix?: string
  theme?: { [key: string]: any }
  normalize?: any
  utilities?: Array<(theme?: { [key: string]: any }) => { [key: string]: any }>
  variants?: any
  apply?: any
}

export interface ContextInterface {
  config: Config
  utilities: { [key: string]: string }
  styleWith: (classNames: string, isImportant: boolean) => string
  updateConfig?: any
}

const { config, utilities, styleWith } = createBenefit()

const ConfigContext = React.createContext<ContextInterface>({
  config,
  utilities,
  styleWith,
})

type State = Readonly<ContextInterface>

export class ConfigProvider extends React.Component {
  state: State

  updateConfig = (newConfig: () => Config) => {
    const { config, utilities, styleWith } = createBenefit(newConfig)

    this.setState({
      config,
      utilities,
      styleWith,
    })
  }

  constructor(props: { config: () => Config }) {
    super(props)

    const { config, utilities, styleWith } = createBenefit(props.config)

    this.state = {
      config,
      utilities,
      styleWith,
      updateConfig: this.updateConfig,
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

export default ConfigContext

export const ConfigConsumer = ConfigContext.Consumer
