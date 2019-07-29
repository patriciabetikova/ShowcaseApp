import React from "react"
import {
  EventWrapper,
  StyledDate,
  CardTitle,
  LineWrapper,
  StyledText,
  StyledWrapper,
} from "./styled"
import { EventButton } from "components/EventButton"
import { Attendees } from "components/Attendees"
import moment from "moment"

export const EventItemList = ({ event, refetchData, status }) => {
  const { date, time, title, description, attendees, capacity, id } = event
  return (
    <EventWrapper>
      <CardTitle>{title}</CardTitle>
      <StyledText>{description}</StyledText>
      <LineWrapper>
        <StyledWrapper>
          <StyledDate>
            {moment(date).format("LL")} - {time}
          </StyledDate>
          <Attendees attendees={attendees} capacity={capacity} />
        </StyledWrapper>
        <EventButton status={status} id={id} refetchData={refetchData} />
      </LineWrapper>
    </EventWrapper>
  )
}
