import styled, { css, keyframes } from "styled-components";

const Badge = props => (
  <StyledBadge {...props}>{props.online ? "Online" : "Offline"}</StyledBadge>
);

const onlineGlow = keyframes`
  from: {
    box-shadow: 0px 0px 0px rgba(0, 255, 0, .5);
  }
  to {
    box-shadow: 0px 0px 20px rgba(0, 255, 0, .5);
  }
`;

const StyledBadge = styled.div`
  animation: ${props =>
    props.online
      ? css`
          ${onlineGlow} 2s ease-in-out infinite alternate
        `
      : undefined};
  display: inline;
  border-radius: 4px;
  background-color: ${props => (props.online ? "rgb(0, 128, 0)" : "red")};
  color: white;
  padding: 2px 4px;
  font-size: 0.8em;
  margin-left: 5px;
  text-transform: uppercase;
`;

export default Badge;
