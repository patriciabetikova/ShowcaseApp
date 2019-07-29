import React from "react"
import {
  EventWrapper,
  StyledDate,
  CardTitle,
  LineWrapper,
  StyledText,
} from "./styled"
import { EventButton } from "components/EventButton"
import { Attendees } from "components/Attendees"
import { formattedDate } from "data/date/formatters"

export const EventItemCard = ({ event, refetchData, status }) => {
  const { date, time, title, description, attendees, capacity, id } = event
  return (
    <EventWrapper>
      <StyledDate>{formattedDate(date, time)}</StyledDate>
      <CardTitle>{title}</CardTitle>
      <StyledText>
        {description
          .slice(0, 150)
          .concat(description.length > 150 ? "..." : "")}
      </StyledText>
      <LineWrapper>
        <Attendees attendees={attendees} capacity={capacity} />
        <EventButton status={status} id={id} refetchData={refetchData} />
      </LineWrapper>
    </EventWrapper>
  )
}
