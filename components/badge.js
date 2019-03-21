import styled from "styled-components";

const Badge = props => (
  <StyledBadge {...props}>{props.online ? "Online" : "Offline"}</StyledBadge>
);

const StyledBadge = styled.div`
  display: inline;
  border-radius: 4px;
  background-color: ${props => (props.online ? "green" : "red")};
  color: white;
  padding: 2px 4px;
  font-size: 0.8em;
  margin-left: 5px;
  text-transform: uppercase;
`;

export default Badge;
