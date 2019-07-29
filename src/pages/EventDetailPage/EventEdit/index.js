import React from "react"
import { AttendeesPanelWrap, EventEditWrap, EventEditFormWrap } from "./styled"
import { EventEditForm } from "./EventEditForm"
import { AttendeesPanel } from "components/AttendeesPanel"

export const EventEdit = ({ event }) => (
  <EventEditWrap>
    <EventEditFormWrap>
      <EventEditForm event={event} fullWidth />
    </EventEditFormWrap>
    <AttendeesPanelWrap>
      <AttendeesPanel attendees={event.attendees} />
    </AttendeesPanelWrap>
  </EventEditWrap>
)
