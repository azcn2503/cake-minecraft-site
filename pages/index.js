import { Fragment, PureComponent } from "react";

import GlobalStyle from "../components/global-style";
import About from "./about";

class IndexPage extends PureComponent {
  render() {
    return (
      <Fragment>
        <GlobalStyle />
        <About {...this.props} />
      </Fragment>
    );
  }
}

export default IndexPage;
