import React from "react"
import { Box } from "../../src"

const defaultExample = `The face of the moon was in shadow.`

export default function TypeUtilityBox({
  caption,
  example = defaultExample,
  modifier,
  value = "",
}) {
  return (
    <Box>
      <Box className="text-base font-sans border rounded-lg overflow-hidden">
        <Box className={`p-4 ${modifier}`}>{example}</Box>
        <Box
          is="code"
          className="bg-cool-gray-50 flex justify-between items-center p-4 font-mono text-cool-gray-500 text-sm block"
        >
          <Box is="span">{modifier}</Box>
          <Box is="span" className="py-1 px-2 rounded bg-white">
            {value}
          </Box>
        </Box>
      </Box>
    </Box>
  )
}
