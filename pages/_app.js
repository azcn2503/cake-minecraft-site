import React from "react";
import axios from "axios";
import App, { Container } from "next/app";

import GlobalStyle from "../components/global-style";
import SiteContext from "../components/site-context";

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
  static async getInitialProps(req) {
    let pageProps = {};

    if (req.Component.getInitialProps) {
      pageProps = await req.Component.getInitialProps(req.ctx);
    }

    if (req) {
      const res = await axios.get(
        "https://mcapi.us/server/status?ip=cake.mc-server.net"
      );
      const serverStatus = await res.data;
      pageProps.serverStatus = serverStatus;
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
        <SiteContext.Provider
          value={{
            webFontsLoaded
          }}
        >
          <Component {...pageProps} />
        </SiteContext.Provider>
      </Container>
    );
  }
}

export default MyApp;
