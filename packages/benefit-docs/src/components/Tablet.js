import React from "react"
import { Box, css } from "benefit-react"

export default function Tablet(props) {
  return (
    <Box className="bg-gray-700 mx-auto p-2 rounded-lg overflow-hidden flex">
      <Box className="relative bg-gray-100 text-xs leading-tight p-2 rounded-sm h-32 overflow-hidden overflow-y-auto">
        {props.children}
      </Box>
    </Box>
  )
}
