import { Fragment } from "react";
import styled from "styled-components";

import { useState, useRef, useEffect } from "react";

export default ({ fullWidth, placeholder }) => {
  const [value, setValue] = useState("");
  const [placeholderWidth, setPlaceholderWidth] = useState(0);
  const placeholderRef = useRef();

  useEffect(() => {
    const { width } = placeholderRef.current.getBoundingClientRect();
    setPlaceholderWidth(width);
  }, []);

  return (
    <StyledTextFieldContainer fullWidth={fullWidth}>
      <StyledTextField
        fullWidth={fullWidth}
        placeholderWidth={placeholderWidth}
        value={value}
        onChange={e => setValue(e.target.value)}
      />
      <PlaceholderOverlay ref={placeholderRef}>
        {placeholder}
      </PlaceholderOverlay>
    </StyledTextFieldContainer>
  );
};

const StyledTextFieldContainer = styled.div`
  width: ${props => (props.fullWidth ? "100%" : undefined)};
  position: relative;
`;

const StyledTextField = styled.input`
  border: 0px solid white;
  border-bottom-width: 2px;
  width: ${props => (props.fullWidth ? "100%" : undefined)};
  padding: 0;
  text-indent: ${props => `${props.placeholderWidth + 20}px`};
`;

const PlaceholderOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  max-width: 50%;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;
