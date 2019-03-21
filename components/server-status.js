import { Fragment } from "react";
import styled from "styled-components";

import Badge from "./badge";

const ServerStatus = props =>
  props.server ? (
    <Fragment>
      Current version: <Highlighted>{props.server.name}</Highlighted>
      {props.online ? (
        <Fragment>
          <Badge online />
          <PlayerCount {...props.players} />
        </Fragment>
      ) : (
        <Badge offline />
      )}
    </Fragment>
  ) : null;

const PlayerCount = props => (
  <StyledPlayerCount>
    {props.now > 0 ? `(${props.now} playing right now)` : null}
  </StyledPlayerCount>
);

const Highlighted = styled.span`
  color: white;
`;

const StyledPlayerCount = styled.div`
  display: inline;
  font-size: 0.8em;
  margin-left: 5px;
`;

export default ServerStatus;
