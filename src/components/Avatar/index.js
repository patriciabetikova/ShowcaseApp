import React from "react"
import { StyledAvatar } from "./styled"
import { getInitials } from "data/users/formatters"

export const Avatar = ({ user, ...rest }) => (
  <StyledAvatar {...rest}>{getInitials(user)}</StyledAvatar>
)
