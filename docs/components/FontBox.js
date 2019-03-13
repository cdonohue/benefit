import React from "react"
import { Box } from "../../src"

const defaultExample = `The quick brown fox jumps over the lazy dog`

export default function FontBox({
  caption,
  example = defaultExample,
  modifier,
  fonts = [],
}) {
  return (
    <Box>
      <Box className="text-base border rounded-lg overflow-hidden">
        <Box className={`p-4 ${modifier}`}>{example}</Box>
        <Box className="bg-cool-gray-50 p-4">
          <Box
            is="code"
            className="pb-2 text-cool-gray-500 font-mono text-sm block"
          >
            {modifier}
          </Box>
          <Box>
            {fonts.map((font) => (
              <Box
                is="code"
                className="px-2 py-1 shadow text-xs bg-white inline-block rounded mb-1 mr-1"
              >
                {font}
              </Box>
            ))}
          </Box>
        </Box>
      </Box>
    </Box>
  )
}
