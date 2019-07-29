import React from "react"
import { EventItemCard } from "components/EventItemCard"
import { FloatAction } from "components/FloatAction"
import { IconButton } from "components/IconButton"
import { urls } from "pages/urls"
import { AttendeesPanel } from "components/AttendeesPanel"
import { Plus } from "assets/icons/Plus"
import { EventDetailWrap, EventCardWrap, AttendeesPanelWrap } from "./styled"

export const EventDetail = ({ event, refetchData, userId, status }) => (
  <EventDetailWrap>
    <EventCardWrap>
      <EventItemCard event={event} refetchData={refetchData} status={status} />
    </EventCardWrap>
    <AttendeesPanelWrap>
      <AttendeesPanel attendees={event.attendees} userId={userId} />
    </AttendeesPanelWrap>
    <FloatAction>
      <IconButton to={urls.eventCreate.url} icon={Plus} />
    </FloatAction>
  </EventDetailWrap>
)
