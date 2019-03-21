import { Fragment } from "react";
import styled from "styled-components";

import Link from "next/link";

import Navigation from "../components/navigation";
import SiteContext from "../components/site-context";
import cakeEmoji from "../utils/cake-emoji";
import { transition } from "../styles/styles";

const Badge = props => <StyledBadge {...props} />;

const OnlineBadge = props => (
  <Badge {...props} backgroundColor="green" color="white">
    Online
  </Badge>
);

const OfflineBadge = props => (
  <Badge {...props} backgroundColor="red" color="white">
    Offline
  </Badge>
);

const PlayerCount = props => (
  <StyledPlayerCount>
    {props.now > 0 ? `(${props.now} playing right now)` : null}
  </StyledPlayerCount>
);

const ServerStatus = props =>
  props.server ? (
    <Fragment>
      Current version: <Highlighted>{props.server.name}</Highlighted>
      {props.online ? (
        <Fragment>
          <OnlineBadge />
          <PlayerCount {...props.players} />
        </Fragment>
      ) : (
        <OfflineBadge />
      )}
    </Fragment>
  ) : null;

export default pageProps => (
  <Fragment>
    <SiteContext.Consumer>
      {({ webFontsLoaded }) => (
        <Main {...pageProps} webFontsLoaded={webFontsLoaded}>
          <TitleSection>
            <Title>
              {cakeEmoji} <Link href="/">Cake</Link>
            </Title>
            <Subtitle>A Minecraft snapshot whitelist community</Subtitle>
          </TitleSection>
          <ServerStatus {...pageProps.serverStatus} />
          <Navigation />
        </Main>
      )}
    </SiteContext.Consumer>
  </Fragment>
);

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

const StyledBadge = styled.div`
  display: inline;
  border-radius: 4px;
  background-color: ${props => props.backgroundColor};
  color: ${props => props.color};
  padding: 2px 4px;
  font-size: 0.8em;
  margin-left: 5px;
`;

const StyledPlayerCount = styled.div`
  display: inline;
  font-size: 0.8em;
  margin-left: 5px;
`;
