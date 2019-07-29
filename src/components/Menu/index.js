import React from "react"
import { withRouter } from "react-router-dom"
import { Link } from "components/Link"
import { StyledItem } from "./styled"

const enhancer = withRouter

export const Menu = enhancer(({ items, location }) =>
  items.map(({ name, ...rest }, i) => {
    return (
      <Link {...rest} key={i}>
        <StyledItem active={rest.to === location.pathname}>{name}</StyledItem>
      </Link>
    )
  }),
)
