import React from "react"
import { Box } from "../../src"

const heights = [8, 16, 12]

export default function FlexBox({ flexModifier, even, stretch, count = 3 }) {
  return (
    <Box className="bg-blue-50 p-2 rounded-lg overflow-hidden">
      <Box is="code" className="font-mono text-blue-500 text-sm block mb-2">
        {flexModifier}
      </Box>
      <Box className={`flex ${flexModifier}`}>
        {!!count &&
          Array.from({ length: count }).map((item, i) => (
            <Box
              className={`text-xs bold text-blue-600 flex items-center justify-center bg-blue-100 rounded border-4 border-blue-200 text-blue-500 h-8 ${
                stretch ? "w-auto" : "w-8"
              } ${even ? "h-8" : `h-${heights[i]}`} m-1 border-4`}
            >
              {i + 1}
            </Box>
          ))}
      </Box>
    </Box>
  )
}
