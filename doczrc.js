import doczPluginNetlify from "docz-plugin-netlify"
import { colors } from "./src/config/theme"

export default {
  title: "<Benefit />",
  description: "Benefit documentation",
  menu: [
    "Introduction",
    "Box",
    {
      name: "Utilities",
      menu: [
        "Color",
        "Layout",
        "Typography",
        "Background",
        "Border",
        "Flexbox",
        "Space",
        "Size",
        "Tables",
        "Effects",
        "Interactivity",
        "Svg",
      ],
    },
    "Customization",
  ],
  codeSandbox: false,
  themeConfig: {
    logo: {
      src:
        "https://github.com/cdonohue/benefit/raw/master/docs/benefit-logo.png",
      width: 150,
    },
    showPlaygroundEditor: true,
    colors: {
      primary: colors.blue["500"],
      text: colors.black,
      link: colors.blue["500"],
      footerText: colors["cool-gray"]["300"],
      sidebarBg: colors["cool-gray"]["100"],
      sidebarText: colors["cool-gray"]["800"],
      sidebarHighlight: colors.blue["200"],
      sidebarBorder: colors["cool-gray"]["200"],
      background: colors.white,
      border: colors["cool-gray"]["200"],
      theadColor: colors["cool-gray"]["700"],
      theadBg: colors["cool-gray"]["100"],
      tableColor: colors["cool-gray"]["800"],
      tooltipBg: colors.black,
      tooltipColor: colors.white,
      codeBg: colors["cool-gray"]["100"],
      codeColor: colors["cool-gray"]["700"],
      preBg: colors["cool-gray"]["100"],
      blockquoteBg: colors["cool-gray"]["100"],
      blockquoteBorder: colors["cool-gray"]["200"],
      blockquoteColor: colors["cool-gray"]["700"],
    },
    styles: {
      // body: {
      //   fontFamily:
      //     'system, -apple-system, ".SFNSText-Regular", "San Francisco", "Roboto", "Segoe UI", "Helvetica Neue", "Lucida Grande", sans-serif',
      //   lineHeight: 1.6,
      // },
      h1: {
        fontFamily: '"Playfair Display", "serif"',
      },
      h2: {
        fontFamily:
          'system, -apple-system, ".SFNSText-Regular", "San Francisco", "Roboto", "Segoe UI", "Helvetica Neue", "Lucida Grande", sans-serif',
      },
      code: {
        fontFamily:
          '"SFMono-Regular", "Menlo", "Monaco", "Consolas", "Liberation Mono", "Courier New", "monospace"',
      },
      a: {
        fontWeight: 400,
      },
    },
  },
  plugins: [doczPluginNetlify()],
}
