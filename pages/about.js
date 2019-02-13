import { Fragment } from "react";
import styled from "styled-components";

import Link from "next/link";

import Navigation from "../components/navigation";
import { transition } from "../styles/styles";
import WebfontsContext from "../components/webfonts-context";

export default pageProps => (
  <Fragment>
    <WebfontsContext.Consumer>
      {({ loaded: webFontsLoaded }) => (
        <Main {...pageProps} webFontsLoaded={webFontsLoaded}>
          <TitleSection>
            <Title>
              <CakeEmoji /> <Link href="/">Cake</Link>
            </Title>
            <Subtitle>A Minecraft snapshot whitelist community</Subtitle>
          </TitleSection>
          <p>
            Current version: <Highlighted>19w04b</Highlighted>
          </p>
          <Navigation />
        </Main>
      )}
    </WebfontsContext.Consumer>
  </Fragment>
);

const CakeEmoji = () => {
  const emojis = ["🧁", "🍥", "🍰", "🥮", "🎂", "⛏"];
  const index = Math.floor(Math.random() * emojis.length);
  return emojis[index];
};

const Highlighted = styled.span`
  color: white;
`;

const Main = styled.div`
  ${transition(["opacity", "filter"])}

  position: absolute;
  top: 50%;
  left: 50%;
  max-width: 600px;
  max-height: 400px;
  transform: translate(-50%, -50%);
  text-align: center;
  opacity: ${props => (props.webFontsLoaded ? 1 : 0)};
  filter: ${props => (props.blur ? "blur(2px)" : undefined)};
`;

const Title = styled.h1`
  color: white;
`;

const Subtitle = styled.p`
  color: white;
`;

const TitleSection = styled.div`
  margin-bottom: 50px;
`;
