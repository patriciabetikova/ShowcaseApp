import React from "react"
import { withModal } from "hoc/withModal"
import { Calendar } from "./Calendar"

const enhancer = withModal("Select date")

export const CalendarModal = enhancer(({ close, onChange, ...rest }) => (
  <div>
    <Calendar onChange={onChange} {...rest} />
  </div>
))
