import { Fragment } from "react";
import styled from "styled-components";

import Link from "next/link";

export default () => (
  <Fragment>
    <Main>
      <TitleSection>
        <Title>
          <CakeEmoji /> <Link href="/">Cake</Link>
        </Title>
        <Subtitle>A whitelist Minecraft snapshot server</Subtitle>
      </TitleSection>
      <p>
        Current version: <Highlighted>19w04b</Highlighted>
      </p>
      <Link href="/rules">Rules</Link> | <Link href="/signup">Sign up</Link>
    </Main>
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
  position: absolute;
  top: 50%;
  left: 50%;
  max-width: 600px;
  max-height: 400px;
  transform: translate(-50%, -50%);
  text-align: center;
`;

const Title = styled.h1`
  color: white;
`;

const Subtitle = styled.p`
  color: white;
  font-style: italic;
  text-transform: capitalize;
  font-size: 0.8em;
`;

const TitleSection = styled.div`
  margin-bottom: 50px;
`;
