import React from "react"
import { IconWrapper } from "./styled"
import { Link } from "components/Link"

export const IconButton = ({ icon: Icon, to, ...p }) => {
  const element = (
    <IconWrapper {...p}>
      <Icon />
    </IconWrapper>
  )
  if (to) return <Link to={to}>{element}</Link>
  return element
}
