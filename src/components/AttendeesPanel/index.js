import React from "react"
import { CardWrapper, UserChip, ChipsWrapper } from "./styled"
import { Title, Subtitle } from "styled/typography"
import { getAmAttending } from "data/events/status"
import { getFullName } from "data/users/formatters"

export const AttendeesPanel = ({ userId, attendees }) => (
  <CardWrapper>
    <Title>Attendees</Title>
    <ChipsWrapper>
      {getAmAttending(userId, attendees) && <UserChip secondary>You</UserChip>}
      {attendees.length === 0 && <Subtitle>No attendees yet</Subtitle>}
      {attendees
        .filter(x => +x.id !== userId)
        .map(x => (
          <UserChip key={x.id}>{getFullName(x)}</UserChip>
        ))}
    </ChipsWrapper>
  </CardWrapper>
)
