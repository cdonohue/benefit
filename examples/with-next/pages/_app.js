import App, { Container } from "next/app"
import { react } from "../../../dist/benefit.esm"

const { ConfigProvider, jsx } = react

export default class MyApp extends App {
  static async getInitialProps({ Component, ctx }) {
    let pageProps = {}

    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx)
    }

    return {
      pageProps: { ...pageProps, primaryColor: (ctx.query.primary = "#00f") },
    }
  }

  render() {
    const { Component, pageProps } = this.props
    const { primaryColor } = pageProps
    return (
      <Container>
        <ConfigProvider
          config={(config) => ({
            ...config,
            theme: {
              ...config.theme,
              textColor: {
                ...config.theme.textColor,
                primary: primaryColor,
              },
            },
          })}
        >
          <Component {...pageProps} />
        </ConfigProvider>
      </Container>
    )
  }
}
