import { useEffect, useRef, useState } from "react";
import styled from "styled-components";

const Background = () => {
  const [loaded, setLoaded] = useState(false);
  const overlayRef = useRef();
  const imageRef = useRef();

  let styleUpdateBlocked = false;
  const onMouseMoveWindow = e => {
    if (styleUpdateBlocked) return;
    styleUpdateBlocked = true;
    requestAnimationFrame(() => {
      if (overlayRef.current) {
        overlayRef.current.style.backgroundImage = `radial-gradient(circle at ${
          e.clientX
        }px ${e.clientY}px, transparent, black 500px)`;
        styleUpdateBlocked = false;
      }
    });
  };

  useEffect(() => {
    if (imageRef.current.complete) {
      setLoaded(true);
    }
    window.addEventListener("mousemove", onMouseMoveWindow);
    return () => {
      window.removeEventListener("mousemove", onMouseMoveWindow);
    };
  }, []);

  return (
    <StyledBackgroundContainer>
      <StyledImage
        ref={imageRef}
        loaded={loaded}
        onLoad={() => setLoaded(true)}
        src="/static/bg.jpg"
      />
      <StyledStaticOverlay />
      <StyledDynamicOverlay ref={overlayRef} />
    </StyledBackgroundContainer>
  );
};

const StyledBackgroundContainer = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
`;

const StyledImage = styled.img`
  transition-property: opacity;
  transition-duration: 4s;
  opacity: ${props => (props.loaded ? 1 : 0)};
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

const StyledStaticOverlay = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  background-image: radial-gradient(circle at 50%, transparent, black 75%);
`;

const StyledDynamicOverlay = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  background-image: radial-gradient(circle at 50%, transparent, black 500px);
`;

export default Background;
