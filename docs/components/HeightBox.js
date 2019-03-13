import React from "react"
import { Box } from "../../src"

export default function HeightBox({ heightModifier }) {
  return (
    <Box className="bg-yellow-50 p-2 rounded-lg overflow-hidden mb-4 justify-between flex flex-col">
      <Box is="code" className="font-mono text-yellow-700 text-sm block mb-2">
        {heightModifier}
      </Box>
      <Box
        className={`bg-yellow-200 rounded border-yellow-400 text-yellow-600 w-full font-mono border-4 ${heightModifier}`}
      />
    </Box>
  )
}
