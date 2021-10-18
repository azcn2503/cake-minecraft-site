import React from "react";
import axios from "axios";
import App, { Container } from "next/app";

import Background from "../components/background";
import DevBanner from "../components/dev-banner";
import GlobalStyle from "../components/global-style";
import SiteContext from "../components/site-context";

function loadWebFonts(loader, done) {
  loader.load({
    google: {
      families: ["Droid Sans"],
    },
    active: () => done(),
    inactive: () => done(),
  });
}

class CakeApp extends App {
  static async getInitialProps(req) {
    let pageProps = {};
    let devMode = false;

    if (req.Component.getInitialProps) {
      pageProps = await req.Component.getInitialProps(req.ctx);
    }

    if (req) {
      devMode = process.env.NODE_ENV === "development" || process.env.CAKE_DEV !== undefined;
      const res = await axios.get("https://mcapi.us/server/status?ip=cake.mc-server.net");
      const serverStatus = await res.data;
      pageProps.serverStatus = serverStatus;
    }

    return { pageProps, devMode };
  }

  constructor(props) {
    super(props);
    this.state = {
      webFontsLoaded: false,
      devMode: props.devMode,
    };
  }

  async componentDidMount() {
    if (window) {
      const webFontLoader = await require("webfontloader");
      loadWebFonts(webFontLoader, () => {
        this.setState({
          webFontsLoaded: true,
        });
      });
    }
  }

  render() {
    const { Component, pageProps } = this.props;
    const { webFontsLoaded, devMode } = this.state;

    return (
      <Container>
        <GlobalStyle />
        <Background serverStatus={pageProps.serverStatus} />
        <SiteContext.Provider
          value={{
            webFontsLoaded,
          }}
        >
          <Component {...pageProps} />
        </SiteContext.Provider>
        {devMode && <DevBanner open={webFontsLoaded} />}
      </Container>
    );
  }
}

export default CakeApp;
