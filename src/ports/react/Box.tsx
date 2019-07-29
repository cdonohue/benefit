import React from "react"
import { ConfigConsumer } from "./ConfigContext"

const Box = React.forwardRef(
  (
    props: {
      children: React.ReactNode[]
      className: string
      css: any
      important: boolean
      is: string | React.ComponentClass
    },
    ref: React.Ref<Element>
  ) => {
    const {
      children,
      className = "",
      css = "",
      important = false,
      is = "div",
      ...remainingProps
    } = props

    const forwardedProps: {
      ref?: React.Ref<Element>
      className?: string
      key?: string
    } = remainingProps

    forwardedProps.ref = ref

    return (
      <ConfigConsumer>
        {({ styleWith }) => {
          if (className || css) {
            forwardedProps.className = styleWith(className, {
              isImportant: important,
              css,
            })
          }

          return React.createElement(is, forwardedProps, ...children)
        }}
      </ConfigConsumer>
    )
  }
)

export default Box
