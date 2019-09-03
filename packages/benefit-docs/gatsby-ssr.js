import React, { Fragment } from "react"
import { renderToString } from "react-dom/server"
import { StylesContainer } from "benefit-react"

export const replaceRenderer = ({ bodyComponent, replaceBodyHTMLString }) => {
  const app = () => (
    <Fragment>
      <StylesContainer />
      {bodyComponent}
    </Fragment>
  )
  replaceBodyHTMLString(renderToString(<app />))
}
