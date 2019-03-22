import { Fragment, useEffect, useState } from "react";
import { withRouter } from "next/router";
import Link from "next/link";

import About from "./about";
import Dialog from "../components/dialog";

export default withRouter(pageProps => (
  <Fragment>
    <About {...pageProps} blur />
    <Dialog
      router={pageProps.router}
      title={<h1>Rules</h1>}
      content={<RulesContent />}
    />
  </Fragment>
));

const RulesContent = () => (
  <ol>
    <li>No griefing, No stealing, etc. Pretty obvious stuff.</li>
    <li>
      Be respectful of other players. If you are having an issue with another
      player, talk to a moderator. Vigilantes are not appreciated.
    </li>
    <li>
      No death traps in public spaces. You can build as many as you want in your
      own base.
    </li>
    <li>
      You must use the same nick on Discord as in-game. You can change your
      discord name specifically for our server, see{" "}
      <a
        href="https://support.discordapp.com/hc/en-us/articles/219070107-Server-Nicknames"
        target="_blank"
      >
        https://support.discordapp.com/hc/en-us/articles/219070107-Server-Nicknames
      </a>
    </li>
    <li>
      Respect zoning restrictions as described in the{" "}
      <Link href="/map">
        <a>map</a>
      </Link>
      .
    </li>
    <li>No advertising or recruiting for other servers</li>
  </ol>
);
