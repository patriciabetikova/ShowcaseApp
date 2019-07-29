import React, { useState } from "react"
import { TextField } from "../TextField"
import { withField } from "hoc/withField"
import { CalendarModal } from "./CalendarModal"
import moment from "moment"

const enhancer = withField

export const DatePicker = enhancer(({ value, onChange }) => {
  const [open, setOpen] = useState(false)
  return (
    <>
      <TextField
        onFocus={() => setOpen(true)}
        readOnly
        onClick={() => setOpen(true)}
        value={value ? moment(value).format("LL") : ""}
      />
      {open && (
        <CalendarModal
          close={() => setOpen(false)}
          onChange={val => {
            onChange(val)
            setOpen(false)
          }}
          value={value}
          dark
        />
      )}
    </>
  )
})
