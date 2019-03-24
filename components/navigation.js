import { withRouter } from "next/router";
import Link from "next/link";
import styled from "styled-components";

const pages = [
  {
    iconClassName: "fas fa-list",
    label: "Rules",
    href: "/rules"
  },
  {
    iconClassName: "fas fa-user-plus",
    label: "Sign up",
    href: "/signup"
  },
  {
    iconClassName: "fab fa-discord",
    label: "Discord",
    href: "/discord"
  }
];

export default withRouter(({ router }) => {
  return (
    <StyledNav>
      {pages.map(({ iconClassName, href, label }) => (
        <StyledLinkContainer key={href}>
          <Link href={href}>
            <a>
              {iconClassName && <StyledIcon className={iconClassName} />}
              {label}
            </a>
          </Link>
        </StyledLinkContainer>
      ))}
    </StyledNav>
  );
});

const StyledNav = styled.nav`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 10px;
`;

const StyledIcon = styled.i`
  margin-right: 5px;
`;

const StyledLinkContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 20px;

  &:last-child {
    margin-right: 0;
  }
`;
