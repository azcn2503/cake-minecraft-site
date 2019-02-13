import React from "react";
import App, { Container } from "next/app";

import GlobalStyle from "../components/global-style";
import WebfontsContext from "../components/site-context";

function loadWebFonts(loader, done) {
  loader.load({
    google: {
      families: ["Droid Sans"]
    },
    active: () => done(),
    inactive: () => done()
  });
}

const emojis = ["🧁", "🍥", "🍰", "🥮", "🎂", "⛏", "🕹"];
const emojiIndex = Math.floor(Math.random() * emojis.length);

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
      webFontsLoaded: false,
      cakeEmoji: <span title="The cake is real">{emojis[emojiIndex]}</span>
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
    const { webFontsLoaded, cakeEmoji } = this.state;

    return (
      <Container>
        <GlobalStyle />
        <WebfontsContext.Provider
          value={{
            webFontsLoaded,
            cakeEmoji
          }}
        >
          <Component {...pageProps} />
        </WebfontsContext.Provider>
      </Container>
    );
  }
}

export default MyApp;
