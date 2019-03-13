import React from "react"
import { Box, ConfigConsumer } from "../../src"
import polychrome from "polychrome"

export default function ColorSwatch(props) {
  return (
    <ConfigConsumer>
      {({ config }) => {
        const { color, label } = props

        const hex =
          config.theme.colors[`${color}-300`] || config.theme.colors[`${color}`]

        const relatedColors = Object.keys(config.theme.colors).filter(
          (colorName) => colorName.includes(color) && color !== colorName
        )

        const contrast = polychrome(hex)
          .contrast()
          .hex()

        function renderRelatedColors() {
          if (relatedColors.length > 1) {
            return (
              <Box className="flex flex-col">
                {relatedColors.map((relatedColor) => {
                  const hex = config.theme.colors[relatedColor]

                  const [name, ...rest] = relatedColor.split("-")
                  const level = rest.slice(-1)

                  const contrast = polychrome(hex)
                    .contrast()
                    .hex()

                  return (
                    <Box
                      key={relatedColor}
                      className={`flex-grow bg-${relatedColor} cursor-normal w-full max-w-xs`}
                    >
                      <Box
                        style={{ transition: "color .1s ease-in-out" }}
                        className={`px-2 py-px text-tiny font-mono text-right text-${relatedColor} hover:text-${
                          contrast === "#FFFFFF" ? "white" : "black"
                        }`}
                      >
                        {level}
                      </Box>
                    </Box>
                  )
                })}
              </Box>
            )
          }
        }

        return (
          <Box className={`rounded overflow-hidden shadow flex`}>
            <Box className={`flex-grow relative shadow flex flex-col`}>
              <Box
                className={`flex-grow h-24 flex flex-col justify-start items-start bg-${color}-300 bg-${color}`}
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
                className={`flex items-center py-1 px-2`}
              >
                <Box
                  className={`w-3 h-3 mr-2 shadow-inner rounded-full bg-${color}-300 bg-${color}`}
                />
                <Box
                  className={`text-${color}-700 font-mono text-sm rounded py-1`}
                >
                  {color}
                </Box>
              </Box>
            </Box>

            {renderRelatedColors()}
          </Box>
        )
      }}
    </ConfigConsumer>
  )
}
