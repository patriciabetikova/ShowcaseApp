import React, { useState } from "react"
import { UserWrapper, UserName } from "./styled"
import { ContextMenu } from "components/ContextMenu"
import { Chevron } from "assets/icons/Chevron"
import { Avatar } from "components/Avatar"
import { Icon } from "components/Icon"
import { getFullName } from "data/users/formatters"

export const User = ({ items, user }) => {
  const [open, setOpen] = useState(false)
  return (
    <UserWrapper onClick={() => setOpen(!open)}>
      <Avatar small user={user} />
      <UserName>{getFullName(user)}</UserName>
      <Icon icon={Chevron} />
      {open && <ContextMenu close={() => setOpen(false)} right items={items} />}
    </UserWrapper>
  )
}
