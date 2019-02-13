import { Fragment, useEffect, useState } from "react";
import classNames from "classnames";
import styled from "styled-components";
import { transition } from "../styles/styles";

const transitionDuration = 200;

const Dialog = ({ router, title, content, autoSize }) => {
  const closeDialog = () => {
    setOpen(false);
    setTimeout(() => router.push("/"), transitionDuration);
  };
  const onWindowKeyDown = ({ keyCode }) => {
    if (keyCode === 27) {
      closeDialog();
    }
  };

  const [open, setOpen] = useState(false);

  useEffect(() => {
    window.addEventListener("keydown", onWindowKeyDown);
    requestAnimationFrame(() => setOpen(true));
    return () => {
      window.removeEventListener("keydown", onWindowKeyDown);
      setOpen(false);
    };
  }, []);

  return (
    <Fragment>
      <DialogBackground
        onClick={closeDialog}
        className={classNames({ open })}
      />
      <StyledDialog
        autoSize={autoSize}
        className={classNames({
          open
        })}
      >
        <DialogTitle>{title}</DialogTitle>
        <DialogContent>{content}</DialogContent>
      </StyledDialog>
    </Fragment>
  );
};

const DialogTitle = props => <StyledDialogTitle {...props} />;

const DialogBackground = props => <StyledDialogBackground {...props} />;

const DialogContent = props => <StyledDialogContent {...props} />;

const StyledDialog = styled.div`
  ${transition()}

  position: absolute;
  width: 50%;
  max-width: ${props => (props.autoSize ? "100vw" : "600px")};
  height: 50%;
  max-height: ${props => (props.autoSize ? "100vh" : "400px")};
  top: 50%;
  left: 50%;
  border: 2px solid white;
  border-radius: 4px;
  background-color: rgba(0, 0, 0, 0.5);
  transform: translate(-50%, calc(-50% - 20px));
  opacity: 0;
  overflow: hidden;

  display: flex;
  flex-direction: column;

  &.open {
    opacity: 1;
    transform: translate(-50%, -50%);
  }
`;

const StyledDialogTitle = styled.div`
  padding: 30px;
  border-bottom: 2px solid white;

  flex-shrink: 0;
`;

const StyledDialogContent = styled.div`
  padding: 30px;
  overflow: auto;
  flex-grow: 1;
`;

const StyledDialogBackground = styled.div`
  ${transition()}

  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.2);
  opacity: 0;

  &.open {
    opacity: 1;
  }
`;

export default Dialog;