import { Fragment, useEffect, useState } from "react";
import { withRouter } from "next/router";

import About from "./about";
import GlobalStyle from "../components/global-style";
import Dialog from "../components/dialog";
import TextField from "../components/textfield";

export default withRouter(({ router }) => (
  <Fragment>
    <About blur />
    <Dialog
      router={router}
      title={<h1>Sign up</h1>}
      content={<SignupContent />}
    />
  </Fragment>
));

const SignupContent = () => {
  return (
    <form>
      <TextField fullWidth placeholder={"Your real name"} />
      <TextField fullWidth placeholder={"Your Discord username"} />
    </form>
  );
};
