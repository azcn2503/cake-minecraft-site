import { Fragment, PureComponent } from "react";

import GlobalStyle from "../components/global-style";
import About from "./about";

export default () => (
  <Fragment>
    <GlobalStyle />
    <About />
  </Fragment>
);
