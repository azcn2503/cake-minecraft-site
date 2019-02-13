import { Fragment } from "react";
import { withRouter } from "next/router";
import Link from "next/link";

const pages = [
  {
    label: "Rules",
    href: "/rules"
  },
  {
    label: "Sign up",
    href: "/signup"
  },
  {
    label: "Discord",
    href: "/discord"
  }
];

export default withRouter(({ router }) => {
  return (
    <nav>
      {pages.map(({ href, label }, index) => (
        <Fragment key={href}>
          <Link href={href}>{label}</Link>
          {index < pages.length - 1 && " | "}
        </Fragment>
      ))}
    </nav>
  );
});
