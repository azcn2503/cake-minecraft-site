import { Fragment } from "react";
import styled, { css, keyframes } from "styled-components";

const Badge = props => (
  <StyledBadge {...props}>
    {props.online && <Shiny />}
    <StyledLabel>{props.online ? "Online" : "Offline"}</StyledLabel>
  </StyledBadge>
);

const Shiny = () => (
  <Fragment>
    <StyledShiny slow />
    <StyledShiny fast />
  </Fragment>
);

const onlineGlow = keyframes`
  from: {
    box-shadow: 0px 0px 0px rgba(0, 255, 0, .5);
  }
  to {
    box-shadow: 0px 0px 20px rgba(0, 255, 0, .5);
  }
`;
const slide = props => keyframes`
  0% {
    opacity: 0;
  }
  50% {
    opacity: ${props.slow ? 0.5 : 0.25};
  }
  100% {
    opacity: 0;
  }
  from: {
    transform: translateX(${props.slow ? "-100%" : "-200%"});
  }
  to {
    transform: translateX(${props.slow ? "100%" : "200%"});
  }
`;

const StyledBadge = styled.div`
  position: relative;
  animation: ${props =>
    props.online
      ? css`
          ${onlineGlow} 2s ease-in-out infinite alternate
        `
      : undefined};
  display: inline-flex;
  border-radius: 4px;
  background-color: ${props => (props.online ? "rgb(0, 128, 0)" : "red")};
  padding: 2px 4px;
  margin-left: 5px;
  text-transform: uppercase;
  overflow: hidden;
  height: 18px;
  align-items: center;
`;

const StyledLabel = styled.div`
  font-size: 0.8em;
  font-weight: bold;
  text-shadow: 0px 1px 1px rgba(0, 0, 0, 0.5);
  color: white;
  z-index: 2;
`;

const StyledShiny = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  background-image: linear-gradient(
    115deg,
    transparent 20%,
    rgba(128, 255, 128, 0.5) 50%,
    transparent 80%
  );
  animation: ${props =>
    css`
      ${slide(props)} ${props.slow ? "4s" : "3.3s"} ease-in-out infinite
    `};
  z-index: 1;
  transform: translateX(-100%);
`;

export default Badge;
