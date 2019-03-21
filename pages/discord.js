import { Fragment } from "react";
import { withRouter } from "next/router";

import Dialog from "../components/dialog";
import About from "./about";

export default withRouter(pageProps => (
  <Fragment>
    <About {...pageProps} blur />
    <Dialog
      router={pageProps.router}
      title={<h1>Discord</h1>}
      content={
        <a href="https://discord.gg/Bdrv25U">It be a link to open Discord</a>
      }
    />
  </Fragment>
));
