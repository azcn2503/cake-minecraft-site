import { Fragment, useEffect, useState } from "react";
import classNames from "classnames";
import styled from "styled-components";

const Dialog = ({ router, title, content }) => {
  const [open, setOpen] = useState(false);
  const closeDialog = () => {
    setOpen(false);
    setTimeout(() => router.push("/"), 200);
  };
  useEffect(() => {
    requestAnimationFrame(() => setOpen(true));
    return () => {
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

const styledTransition = () => `
  transition-property: opacity, transform;
  transition-duration: 0.2s;
`;

const StyledDialog = styled.div`
  ${styledTransition()};
  position: absolute;
  width: 50%;
  max-width: 600px;
  height: 50%;
  max-height: 400px;
  top: 50%;
  left: 50%;
  border: 2px solid white;
  border-radius: 4px;
  background-color: black;
  transform: translate(-50%, calc(-50% - 20px));
  opacity: 0;

  &.open {
    opacity: 1;
    transform: translate(-50%, -50%);
  }
`;

const StyledDialogTitle = styled.div`
  padding: 30px;
  border-bottom: 2px solid white;
`;

const StyledDialogContent = styled.div`
  padding: 30px;
`;

const StyledDialogBackground = styled.div`
  ${styledTransition()};
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
