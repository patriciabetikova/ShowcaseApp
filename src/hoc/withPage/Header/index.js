import React from "react"
import { urls } from "pages/urls"
import { withRouter } from "react-router-dom"
import { User } from "./User"
import { StyledHeader, StyledLink } from "./styled"
import { logout } from "data/auth/rx"
import { Link } from "components/Link"
import { Logo } from "components/Logo"
import { Icon } from "components/Icon"
import { ArrowRight } from "assets/icons/ArrowRight"

const enhancer = withRouter

export const Header = enhancer(({ link, user }) => (
  <StyledHeader>
    <Link to={urls.home.url}>
      <Logo />
    </Link>
    {link && (
      <Link to={link.url}>
        <StyledLink>
          <Icon icon={ArrowRight} primaryFill rotate />
          {link.text}
        </StyledLink>
      </Link>
    )}
    <User
      items={[
        { name: "Profile", to: urls.profile.url },
        { name: "Log-out", onClick: logout },
      ]}
      user={user}
    />
  </StyledHeader>
))
