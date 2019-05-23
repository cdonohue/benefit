import React from "react"
import { theme, useConfig, ComponentsProvider, Routes } from "docz"
import { injectGlobal, css } from "emotion"
import { colors } from "../../src/config/theme"
import Page from "./components/Page"
import Playground from "./components/Playground"
import Code from "./components/Code"

import { Box, ConfigProvider } from "../../dist/react.js"
import Loader from "./components/Loader"

injectGlobal`
  html {
    box-sizing: border-box;
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica,
      Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
    font-weight: 400;
    font-size: 13px;
    color: ${colors.gray[800]};
    /* text-shadow: 0 2px 0 rgba(0, 0, 0, 0.07); */

    @media screen and (min-width: 768px) {
      font-size: 16px;
    }
  }

  *,
  *:before,
  *:after {
    box-sizing: inherit;
  }

  body {
    margin: 0;
    padding: 0;
    min-height: 100vh;
    height: 100vh;
    background: ${colors.gray[200]} ;
  }
  
  #root {
    height: 100%;
  }
`

const partialUnderline = css`
  position: relative;
  &:before {
    content: "";
    position: absolute;
    bottom: -6px;
    height: 4px;
    left: 0px;
    width: 30%;
    border-radius: 12px;
    background: ${colors.blue[400]};
  }
`

const map = {
  page: Page,
  playground: Playground,
  p: (props) => <Box is="p" className="mt-2 mb-4 leading-relaxed" {...props} />,
  // notFound: components.NotFound,
  // render: components.Render,
  Loading: (props) => <Loader {...props} />,
  h1: (props) => (
    <Box
      is="h1"
      style={{ lineHeight: ".7" }}
      className="text-4xl mt-0 mb-8 pb-4 border-b"
      {...props}
    />
  ),
  h2: (props) => (
    <Box
      is="h2"
      className="text-2xl leading-tight mt-6 mb-4 pb-2 text-gray-800"
      {...props}
    />
  ),
  h3: (props) => (
    <Box
      is="h3"
      className="text-xl leading-tight mt-6 mb-4 border-b pb-2 border-gray-400 text-gray-800"
      {...props}
    />
  ),
  hr: (props) => <Box is="hr" className="my-4 border-gray-400" {...props} />,
  // h3: components.H3,
  // h4: components.H4,
  // h5: components.H5,
  // h6: components.H6,
  // ul: components.List,
  // table: components.Table,
  ul: (props) => (
    <Box
      is="ul"
      className="border-t border-b border-gray-400 border-dashed pt-2 pb-4 list-inside"
      {...props}
    />
  ),
  li: (props) => <Box is="li" className="pt-2" {...props} />,
  a: (props) => (
    <Box
      is="a"
      className="text-blue-500 no-underline hover:text-blue-700"
      {...props}
    />
  ),
  pre: Code,
  blockquote: (props) => (
    <Box
      is="blockquote"
      className="rounded overflow-hidden shadow-inner bg-gray-300 px-4 py-2 text-gray-800 my-4"
      {...props}
    />
  ),
  inlineCode: (props) => (
    <Box
      is="span"
      className="rounded-sm bg-white overflow-hidden px-1 font-mono text-gray-700 border"
      {...props}
    />
  ),
}

const Theme = ({ children }) => (
  <ComponentsProvider components={map}>
    <Box className="font-sans">{children}</Box>
  </ComponentsProvider>
)

const themeConfig = {
  colors: {
    primary: "tomato",
    secondary: "khaki",
    gray: "lightslategray",
  },
}

export default theme(themeConfig)(Theme)
