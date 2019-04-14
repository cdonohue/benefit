import React from "react"
import { LiveProvider, LiveEditor, LivePreview, LiveError } from "react-live"
import { Box } from "../../../dist/benefit.js"

const theme = {
  plain: {
    color: "#F8F8F2",
    backgroundColor: "#282A36",
  },
  styles: [
    {
      types: ["prolog", "constant", "builtin"],
      style: {
        color: "rgb(189, 147, 249)",
      },
    },
    {
      types: ["inserted", "function"],
      style: {
        color: "rgb(80, 250, 123)",
      },
    },
    {
      types: ["deleted"],
      style: {
        color: "rgb(255, 85, 85)",
      },
    },
    {
      types: ["changed"],
      style: {
        color: "rgb(255, 184, 108)",
      },
    },
    {
      types: ["punctuation", "symbol"],
      style: {
        color: "rgb(248, 248, 242)",
      },
    },
    {
      types: ["string", "char", "tag", "selector"],
      style: {
        color: "rgb(255, 121, 198)",
      },
    },
    {
      types: ["keyword", "variable"],
      style: {
        color: "rgb(189, 147, 249)",
        fontStyle: "italic",
      },
    },
    {
      types: ["comment"],
      style: {
        color: "rgb(98, 114, 164)",
      },
    },
    {
      types: ["attr-name"],
      style: {
        color: "rgb(241, 250, 140)",
      },
    },
  ],
}

export default function Playground(props) {
  return (
    <LiveProvider code={props.code} scope={props.scope} theme={theme}>
      <Box className="overflow-hidden rounded shadow mb-4">
        <Box className="p-3 bg-gray-800 text-white">
          <LiveEditor />
        </Box>

        <Box className="bg-white  p-4">
          <LivePreview />
          <LiveError />
        </Box>
      </Box>
    </LiveProvider>
  )
}
