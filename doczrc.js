import doczPluginNetlify from "docz-plugin-netlify"

import { colors } from "./src/config/theme"

export default {
  title: "<CSS System />",
  description: "CSS System documentation",
  codeSandbox: false,
  themeConfig: {
    colors: {
      primary: colors["blue-300"],
      text: colors.black,
      link: colors["blue-300"],
      footerText: colors["cool-gray-200"],
      sidebarBg: colors["cool-gray-50"],
      sidebarText: colors["cool-gray-700"],
      sidebarHighlight: colors["blue-200"],
      sidebarBorder: colors["cool-gray-100"],
      background: colors.white,
      border: colors["cool-gray-100"],
      theadColor: colors["cool-gray-600"],
      theadBg: colors["cool-gray-50"],
      tableColor: colors["cool-gray-700"],
      tooltipBg: colors.black,
      tooltipColor: colors.white,
      codeBg: colors["cool-gray-50"],
      codeColor: colors["cool-gray-600"],
      preBg: colors["cool-gray-50"],
      blockquoteBg: colors["cool-gray-50"],
      blockquoteBorder: colors["cool-gray-100"],
      blockquoteColor: colors["cool-gray-600"],
    },
  },
  plugins: [doczPluginNetlify()],
}
