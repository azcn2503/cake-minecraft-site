import { Fragment, useEffect, useState } from "react";
import classNames from "classnames";
import styled from "styled-components";
import { transition } from "../styles/styles";

const transitionDuration = 200;

const Dialog = ({
  router,
  title,
  content,
  autoSize,
  DialogContentProps,
  big
}) => {
  const closeDialog = () => {
    setOpen(false);
    setTimeout(() => router.replace("/"), transitionDuration);
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
        big={big}
        autoSize={autoSize}
        className={classNames({
          open
        })}
      >
        <DialogTitle>
          <div>{title}</div>
          <CloseButton onClick={closeDialog} />
        </DialogTitle>
        <DialogContent {...DialogContentProps}>{content}</DialogContent>
      </StyledDialog>
    </Fragment>
  );
};

Dialog.defaultProps = {
  DialogContentProps: {}
};

const CloseButton = ({ onClick }) => (
  <StyledButton type="button" onClick={onClick}>
    <StyledCloseIcon className="fas fa-times" />
  </StyledButton>
);

const DialogTitle = props => <StyledDialogTitle {...props} />;

const DialogBackground = props => <StyledDialogBackground {...props} />;

const DialogContent = props => <StyledDialogContent {...props} />;

const StyledButton = styled.button`
  outline: none;
  border: none;
  background: transparent;
  cursor: pointer;
  position: absolute;
  right: 1em;
  top: 1em;
  font: inherit;
  color: inherit;

  &:hover {
    color: white;
  }
`;

const StyledDialog = styled.div`
  ${transition()}

  position: absolute;
  width: ${props => (props.big ? "80%" : "50%")};
  min-width: 600px;
  height: 80%;
  top: 50%;
  left: 50%;
  border: 2px solid white;
  border-radius: 0.5em;
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

  @media screen and (max-width: 800px) {
    width: 80%;
    height: 80%;
    min-width: unset;
  }
`;

const StyledDialogTitle = styled.div`
  padding: 1em;
  border-bottom: 2px solid white;
  text-align: center;
  background-color: black;

  flex-shrink: 0;
`;

const StyledDialogContent = styled.div`
  padding: 1em;
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

const StyledCloseIcon = styled.i`
  font-size: 2em;
`;

export default Dialog;
