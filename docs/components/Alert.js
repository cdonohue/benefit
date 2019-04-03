import React from "react"
import { Box } from "../../dist/benefit.js"

function renderAlertIcon(type) {
  if (type === "success") {
    return (
      <Box
        className="w-4 h-4"
        is="svg"
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        stroke-width="3"
        stroke-linecap="round"
        stroke-linejoin="round"
        class="feather feather-check"
      >
        <polyline points="20 6 9 17 4 12" />
      </Box>
    )
  }
  if (type === "info") {
    return (
      <Box
        className="w-4 h-4"
        is="svg"
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        stroke-width="3"
        stroke-linecap="round"
        stroke-linejoin="round"
        class="feather feather-info"
      >
        <circle cx="12" cy="12" r="10" />
        <line x1="12" y1="16" x2="12" y2="12" />
        <line x1="12" y1="8" x2="12" y2="8" />
      </Box>
    )
  }
  if (type === "warning") {
    return (
      <Box
        className="w-4 h-4"
        is="svg"
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        stroke-width="3"
        stroke-linecap="round"
        stroke-linejoin="round"
        class="feather feather-alert-circle"
      >
        <circle cx="12" cy="12" r="10" />
        <line x1="12" y1="8" x2="12" y2="12" />
        <line x1="12" y1="16" x2="12" y2="16" />
      </Box>
    )
  }
  if (type === "error") {
    return (
      <Box
        is="svg"
        className="w-4 h-4"
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        stroke-width="3"
        stroke-linecap="round"
        stroke-linejoin="round"
        class="feather feather-x"
      >
        <line x1="18" y1="6" x2="6" y2="18" />
        <line x1="6" y1="6" x2="18" y2="18" />
      </Box>
    )
  }
  return (
    <Box
      className="w-4 h-4"
      is="svg"
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      stroke-width="3"
      stroke-linecap="round"
      stroke-linejoin="round"
      class="feather feather-bell"
    >
      <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9" />
      <path d="M13.73 21a2 2 0 0 1-3.46 0" />
    </Box>
  )
}

const colorMap = {
  success: "green",
  warning: "orange",
  error: "red",
  info: "blue",
}

export default function Alert(props) {
  const { children, heading = "", type } = props

  const color = type ? colorMap[type] : "gray"

  return (
    <Box
      className={`font-sans flex flex-col bg-${color}-100 overflow-hidden shadow-lg mb-8 border-t border-${color}-400 border-t-8 rounded-lg`}
    >
      <Box className="flex">
        <Box className="p-4">
          <Box
            className={`rounded-full bg-white border border-4 border-${color}-200 flex p-2 justify-center items-center text-${color}-400`}
          >
            {renderAlertIcon(type)}
          </Box>
        </Box>
        <Box className="pl-0 p-4 flex-grow">
          {heading && (
            <Box
              is="h3"
              className={`text-${color}-700 text-normal lh-tight mb-2`}
            >
              {heading}
            </Box>
          )}
          <Box className={`text-${color}-400 text-sm`}>{children}</Box>
        </Box>
      </Box>
    </Box>
  )
}
