import styled from "styled-components";

const ServerIcon = props => {
  if (props.favicon) {
    return <img src={props.favicon} />;
  } else {
    return <StyledPlaceholder>Cake</StyledPlaceholder>;
  }
};

const StyledPlaceholder = styled.span`
  font-size: 2em;
  color: white;
`;

export default ServerIcon;
