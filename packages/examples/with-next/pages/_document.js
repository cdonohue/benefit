import Document, { Html, Head, Main, NextScript } from "next/document"
import { StylesContainer } from "benefit-react"

export default class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
          <StylesContainer />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}
