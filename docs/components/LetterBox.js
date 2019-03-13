import React from "react"
import { Box } from "../../src"

export default function LetterBox({
  caption,
  example = "Aa",
  modifier,
  value,
}) {
  return (
    <Box className="rounded-lg border font-sans overflow-hidden">
      <Box
        className={`h-32 flex items-center relative justify-center ${modifier}`}
      >
        <Box className="absolute pin-t pin-r m-2 py-1 px-2 rounded-sm bg-cool-gray-50 font-mono text-cool-gray-500 inline-block mt-2 text-xs">
          {value}
        </Box>
        <Box className="mt-6 text-shadow">{example}</Box>
      </Box>
      <Box
        is="code"
        className="bg-cool-gray-50 p-4 font-mono text-cool-gray-600 text-sm block"
      >
        <Box>{modifier}</Box>
      </Box>
    </Box>
  )
}
