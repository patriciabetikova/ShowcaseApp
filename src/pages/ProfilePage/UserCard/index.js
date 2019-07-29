import React from "react"
import { Title, Subtitle } from "styled/typography"
import { ProfileAvatar, CardWrapper } from "./styled"
import { getFullName } from "data/users/formatters"

export const UserCard = ({ user, email }) => (
  <CardWrapper>
    <ProfileAvatar user={user} />
    <Title>{getFullName(user)}</Title>
    <Subtitle>{email}</Subtitle>
  </CardWrapper>
)
