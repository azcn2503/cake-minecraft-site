import { Fragment, useEffect, useState } from "react";
import { withRouter } from "next/router";

import About from "./about";
import GlobalStyle from "../components/global-style";
import Dialog from "../components/dialog";
import TextField from "../components/textfield";

export default withRouter(pageProps => (
  <Fragment>
    <About {...pageProps} blur />
    <Dialog
      big
      router={pageProps.router}
      title={<h1>Sign up</h1>}
      content={<SignupContent />}
      DialogContentProps={{
        style: {
          padding: 0,
          overflow: "hidden"
        }
      }}
    />
  </Fragment>
));

const SignupContent = () => {
  return <iframe src="https://goo.gl/forms/AnWjQW8jG0Z3SKxt2" />;
};
