import { useRef } from "react";
import styled from "styled-components";

import Navigation from "../components/navigation";
import ServerIcon from "../components/server-icon";
import ServerStatus from "../components/server-status";
import SiteContext from "../components/site-context";
import { usePixelTranslateEffect } from "../components/effects";
import { transition } from "../styles/styles";

export default pageProps => {
  const mainRef = useRef();
  usePixelTranslateEffect(mainRef);
  return (
    <SiteContext.Consumer>
      {({ webFontsLoaded }) => (
        <Main ref={mainRef} {...pageProps} webFontsLoaded={webFontsLoaded}>
          <TitleSection>
            <ServerIcon {...pageProps.serverStatus} /> <Subtitle>A Minecraft snapshot whitelist community</Subtitle>
          </TitleSection>
          <ServerStatus {...pageProps.serverStatus} />
          <Navigation />
        </Main>
      )}
    </SiteContext.Consumer>
  );
};

const Main = styled.div`
  ${transition(["opacity", "filter"], 1000)}

  position: absolute;
  top: 50%;
  left: 50%;
  width: 400px;
  max-height: 400px;
  transform: translate(-50%, -50%);
  text-align: center;
  opacity: ${props => (props.webFontsLoaded ? 1 : 0)};
`;

const Subtitle = styled.p`
  color: white;
`;

const TitleSection = styled.div`
  margin-bottom: 50px;
`;
