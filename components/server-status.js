import { Fragment } from "react";
import styled from "styled-components";

import Badge from "./badge";

const ServerStatus = props =>
  props.server ? (
    <StyledServerStatus>
      <StyledCurrentVersion>
        Current version:
        <StyledVersionLabel>{props.server.name}</StyledVersionLabel>
      </StyledCurrentVersion>
      {props.online ? (
        <Fragment>
          <StyledBadge online />
          <PlayerCount {...props.players} />
        </Fragment>
      ) : (
        <StyledBadge offline />
      )}
    </StyledServerStatus>
  ) : null;

const PlayerCount = props =>
  props.now > 0 ? (
    <StyledPlayerCount>({props.now} playing right now)</StyledPlayerCount>
  ) : null;

const StyledVersionLabel = styled.span`
  color: white;
  margin-left: 5px;
`;

const StyledServerStatus = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const StyledCurrentVersion = styled.div``;

const StyledPlayerCount = styled.div`
  display: inline;
  font-size: 0.8em;
  margin-left: 5px;
`;

const StyledBadge = styled(Badge)`
  margin-left: 10px;
`;

export default ServerStatus;
