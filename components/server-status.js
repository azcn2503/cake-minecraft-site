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
  white-space: nowrap;
`;

const StyledCurrentVersion = styled.div``;

const StyledPlayerCount = styled.div`
  display: inline-flex;
  align-items: center;
  padding: 2px 4px 2px 8px;
  border-top-right-radius: 4px;
  border-bottom-right-radius: 4px;
  height: 18px;
  font-size: 0.8em;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 1;
  transform: translateX(-4px);
`;

const StyledBadge = styled(Badge)`
  margin-left: 10px;
  z-index: 2;
  flex-shrink: 0;
`;

export default ServerStatus;
