import App from "next/app"
import Head from "next/head"
import { ConfigProvider, StylesContainer } from "benefit-react"

export default class MyApp extends App {
  static async getInitialProps({ Component, ctx }) {
    let pageProps = {}

    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx)
    }

    return {
      pageProps: { ...pageProps },
    }
  }

  render() {
    const { Component, pageProps } = this.props

    const colors = {
      primary: "yellow",
    }

    return (
      <ConfigProvider
        config={(config) => ({
          ...config,
          theme: {
            ...config.theme,
            backgroundColor: {
              ...config.theme.backgroundColor,
              ...colors,
            },
            textColor: {
              ...config.theme.textColor,
              ...colors,
            },
          },
        })}
      >
        <Head>
          <StylesContainer />
        </Head>
        <Component {...pageProps} />
      </ConfigProvider>
    )
  }
}
