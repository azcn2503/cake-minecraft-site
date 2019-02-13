import React from "react";
import App, { Container } from "next/app";

import GlobalStyle from "../components/global-style";
import WebfontsContext from "../components/webfonts-context";

function loadWebFonts(loader, done) {
  loader.load({
    google: {
      families: ["Droid Sans"]
    },
    active: () => done(),
    inactive: () => done()
  });
}

class MyApp extends App {
  static async getInitialProps({ Component, ctx }) {
    let pageProps = {};

    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx);
    }

    return { pageProps };
  }

  constructor(props) {
    super(props);
    this.state = {
      webFontsLoaded: false
    };
  }

  async componentDidMount() {
    if (window) {
      const webFontLoader = await require("webfontloader");
      loadWebFonts(webFontLoader, () => {
        this.setState({
          webFontsLoaded: true
        });
      });
    }
  }

  render() {
    const { Component, pageProps } = this.props;
    const { webFontsLoaded } = this.state;

    return (
      <Container>
        <GlobalStyle />
        <WebfontsContext.Provider
          value={{
            loaded: webFontsLoaded
          }}
        >
          <Component {...pageProps} webFontsLoaded={webFontsLoaded} />
        </WebfontsContext.Provider>
      </Container>
    );
  }
}

export default MyApp;
