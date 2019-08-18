import React from "react"
import Box from "./Box"

export default function jsx(type: any, props: any, ...children: any[]) {
  if (props && (props.className || props.css)) {
    return React.createElement(Box, { ...props, is: type }, ...children)
  }

  return React.createElement(type, { ...props }, ...children)
}
