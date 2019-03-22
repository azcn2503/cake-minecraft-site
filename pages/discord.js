import { Fragment } from "react";
import { withRouter } from "next/router";
import styled from "styled-components";

import Dialog from "../components/dialog";
import About from "./about";

export default withRouter(pageProps => (
  <Fragment>
    <About {...pageProps} blur />
    <Dialog
      router={pageProps.router}
      title={<h1>Discord</h1>}
      content={
        <StyledContent>
          <a href="https://discord.gg/Bdrv25U">
            Click here to go to our Discord server
          </a>
        </StyledContent>
      }
    />
  </Fragment>
));

const StyledContent = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  align-items: center;
  justify-content: center;
`;
