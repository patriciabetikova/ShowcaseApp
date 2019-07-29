import React, { useState } from "react"
import { TextField } from "inputs/TextField"
import { InputWrapper, InputIcon } from "./styled"
import { Show } from "assets/icons/Show"

export const PasswordField = p => {
  const [show, setShow] = useState(false)
  return (
    <InputWrapper>
      <TextField {...p} type={show ? "show" : "password"} />
      <InputIcon onClick={() => setShow(!show)}>
        <Show />
      </InputIcon>
    </InputWrapper>
  )
}
