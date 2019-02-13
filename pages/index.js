import { Fragment } from "react";

import GlobalStyle from "../components/global-style";
import About from "./about";

export default pageProps => {
  return (
    <Fragment>
      <GlobalStyle />
      <About {...pageProps} />
    </Fragment>
  );
};
