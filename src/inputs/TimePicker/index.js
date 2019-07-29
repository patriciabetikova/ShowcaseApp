import React, { useState } from "react"
import { Select } from "inputs/Select"
import { withField } from "hoc/withField"
import { StyledTimePicker } from "./styled"
import * as R from "ramda"

const enhancer = withField

const hoursOptions = R.range(0, 24).map(x => ({ name: x, value: x }))

const leftPad0 = x => (x < 10 ? "0" + x : x)

const minsOptions = R.range(0, 12)
  .map(x => x * 5)
  .map(leftPad0)
  .map(x => ({ name: x, value: x }))

export const TimePicker = enhancer(({ value, onChange }) => {
  const [h, m] = value ? value.split(":") : []
  const [hours, setHours] = useState(h)
  const [minutes, setMinutes] = useState(m)

  return (
    <StyledTimePicker>
      <Select
        value={hours}
        noMinWidth
        onChange={val => {
          setHours(val)
          if (!R.isNil(val) && !R.isNil(minutes)) {
            onChange(val + ":" + minutes)
          }
        }}
        options={hoursOptions}
        placeholder="hh"
      />
      <Select
        value={minutes}
        noMinWidth
        onChange={val => {
          setMinutes(val)
          if (!R.isNil(hours) && !R.isNil(val)) {
            onChange(hours + ":" + val)
          }
        }}
        options={minsOptions}
        placeholder="mm"
      />
    </StyledTimePicker>
  )
})
