import { Fragment } from "react";
import { withRouter } from "next/router";

import Dialog from "../components/dialog";
import About from "./about";

export default withRouter(pageProps => (
  <Fragment>
    <About {...pageProps} />
    <Dialog
      router={pageProps.router}
      title={<h1>Map</h1>}
      content={
        <Fragment>
          <p>A map of our glorious world!</p>
          <img
            src="https://cdn.discordapp.com/attachments/523635616852738068/523898058833133578/unknown.png"
            style={{ width: "100%" }}
          />
        </Fragment>
      }
      big
    />
  </Fragment>
));
