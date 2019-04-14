import React from "react"
import { LiveProvider, LiveEditor, LivePreview, LiveError } from "react-live"
import { css } from "emotion"
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

const formattedCode = css`
  & textarea {
    padding: 0 !important;
  }
  & pre {
    counter-reset: code;
    padding: 0 !important;
  }

  & pre .token-line {
    padding-left: 2rem;
    position: relative;
    &::before {
      color: rgba(255, 255, 255, 0.26);
      position: absolute;
      left: 0;
      counter-increment: code;
      content: counter(code);
      width: 1.25rem;
      text-align: right;
    }
  }

  & pre .token-line:last-child {
    display: none;
  }
`

export default function Code(props) {
  const [_, language] = props.children.props.props.className.split("-")
  return (
    <LiveProvider code={props.children.props.children} disabled theme={theme}>
      <Box
        className={`${formattedCode} bg-gray-800 p-4 mb-4 text-sm text-base rounded relative overflow-hidden`}
      >
        <LiveEditor />
      </Box>
    </LiveProvider>
  )
}
