import { Fragment, useEffect, useState } from "react";
import { withRouter } from "next/router";

import About from "./about";
import GlobalStyle from "../components/global-style";
import Dialog from "../components/dialog";

export default withRouter(({ router }) => (
  <Fragment>
    <GlobalStyle />
    <About />
    <Dialog router={router} title={<h1>Rules</h1>} content={"Dem rules"} />
  </Fragment>
));
