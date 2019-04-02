import React from "react"
import polychrome from "polychrome"
import flattenColorConfig from "../../src/config/flattenColorConfig"
import { Box, ConfigConsumer } from "../../dist/benefit.js"

function renderRelatedColors(relatedColors) {
  if (relatedColors.length > 1) {
    return (
      <Box className="flex flex-col">
        {relatedColors
          .sort((a, b) => b.level - a.level)
          .map(({ name, value }) => {
            const hex = value

            const contrast = polychrome(hex)
              .contrast()
              .hex()

            return (
              <Box
                key={name}
                className={`flex-grow h-4 bg-${name} cursor-normal w-8`}
              />
            )
          })}
      </Box>
    )
  }
}

export default function ColorSwatch(props) {
  return (
    <ConfigConsumer>
      {({ config }) => {
        const { color } = props

        const flattenedColors = flattenColorConfig(config.theme.colors)

        const hex = flattenedColors[`${color}-500`] || flattenedColors[color]

        const relatedColors =
          typeof config.theme.colors[color] === "object"
            ? Object.keys(config.theme.colors[color]).map(
                (colorVariant) => ({
                  name: `${color}-${colorVariant}`,
                  level: colorVariant,
                  value: config.theme.colors[color][colorVariant],
                }),
                {}
              )
            : [config.theme.colors[color]]

        const contrast = polychrome(hex)
          .contrast()
          .hex()

        return (
          <Box className="rounded overflow-hidden shadow flex">
            <Box className="flex-grow relative shadow flex flex-col">
              <Box
                className={`flex-grow h-24 flex flex-col justify-start items-start bg-${color}-400 bg-${color}`}
              >
                <Box
                  className={`text-${
                    contrast === "#FFFFFF" ? `white` : `black`
                  }`}
                >
                  {/* <Box>{label || color}</Box> */}
                  {/* <Code className="text-sm uppercase">{hex}</Code> */}
                </Box>
              </Box>
              <Box
                style={{
                  boxShadow:
                    color === "white" ? "inset 0 1px rgba(0,0,0,.06)" : "",
                }}
                className="flex items-center py-1 px-2"
              >
                <Box
                  className={`w-3 h-3 mr-2 shadow-inner rounded-full bg-${color}-400 bg-${color}`}
                />
                <Box
                  className={`text-${color}-900 font-mono text-sm rounded py-1`}
                >
                  {color}
                </Box>
              </Box>
            </Box>

            {renderRelatedColors(relatedColors)}
          </Box>
        )
      }}
    </ConfigConsumer>
  )
}
