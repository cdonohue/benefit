import { useContext } from "react"
import { createCss } from "benefit"
import ConfigContext from "./ConfigContext"

const { config } = useContext(ConfigContext)

export default createCss(config)
