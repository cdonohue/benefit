import ConfigContext, { ConfigConsumer, ConfigProvider } from "./ConfigContext"
import Preflight from "./Preflight"
import StylesContainer from "./StylesContainer"
import withStyles from "./withStyles"
import Box from "./Box"
import jsx from "./jsx"

import {
  baseStyles,
  createBenefit,
  createUtilitiesFromMap,
  createVariant,
  createVariantsFromMap,
  flattenColorConfig,
  css,
  injectGlobal,
  injectPreflight,
  keyframes,
  parseDeclarations,
  theme,
} from "benefit"

export {
  baseStyles,
  ConfigContext,
  ConfigConsumer,
  ConfigProvider,
  StylesContainer,
  withStyles,
  Box,
  jsx,
  createBenefit,
  createUtilitiesFromMap,
  createVariant,
  createVariantsFromMap,
  css,
  keyframes,
  flattenColorConfig,
  parseDeclarations,
  injectGlobal,
  injectPreflight,
  Preflight,
  theme,
}
