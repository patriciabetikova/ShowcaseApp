import React from "react"
import { DayWrap } from "./styled"
import moment from "moment"

export const Day = ({
  onChange,
  day,
  value,
  month,
  minDate,
  maxDate,
  noFuture,
}) => (
  <DayWrap
    onClick={() => onChange(day.format("YYYY-MM-DD"))}
    blocked={
      (minDate && day.isBefore(minDate)) ||
      ((maxDate && day.isAfter(maxDate)) || (noFuture && day.isAfter(moment())))
    }
    active={value && day.diff(moment(value).startOf("day"), "days") === 0}
    today={day.diff(moment().startOf("day"), "days") === 0}
    outside={
      day
        .clone()
        .startOf("month")
        .diff(month.startOf("month"), "months") !== 0
    }
  >
    {day.format("D")}
  </DayWrap>
)
