import styled from "styled-components";
import { transition } from "../styles/styles";

const DevBanner = ({ open }) => (
  <StyledDevBanner open={open}>Development site</StyledDevBanner>
);

const StyledDevBanner = styled.div`
  ${transition(["transform"])};
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  padding: 5px;
  background-color: red;
  color: white;
  text-align: center;
  text-transform: uppercase;
  font-weight: bold;
  transform: ${props => (props.open ? "translateY(0)" : "translateY(-100%)")};
`;

export default DevBanner;
