import { Fragment } from "react";
import { withRouter } from "next/router";

import Dialog from "../components/dialog";
import About from "./about";

export default withRouter(({ router }) => (
  <Fragment>
    <About blur />
    <Dialog
      router={router}
      title={<h1>Discord</h1>}
      content={<a href="#">It be a link to open Discord</a>}
    />
  </Fragment>
));
