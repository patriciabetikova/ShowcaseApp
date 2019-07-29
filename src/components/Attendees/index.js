import React from "react"
import { User } from "assets/icons/User"
import { AttendeesWrapper, Count } from "./styled"
import { Icon } from "components/Icon"

export const Attendees = ({ attendees, capacity }) => (
  <AttendeesWrapper>
    <Icon icon={User} grey small />
    <Count>
      {attendees.length} of {capacity}
    </Count>
  </AttendeesWrapper>
)
