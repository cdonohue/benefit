import React from "react"
import { Box } from "../../src"

export default function WidthBox({ widthModifier }) {
  return (
    <Box className="bg-blue-50 p-2 rounded-lg overflow-hidden">
      <Box is="code" className="font-mono text-blue-500 text-sm block mb-2">
        {widthModifier}
      </Box>
      <Box
        className={`bg-blue-200 rounded border-blue-300 text-blue-500 h-6 font-mono border-4 ${widthModifier}`}
      />
    </Box>
  )
}
